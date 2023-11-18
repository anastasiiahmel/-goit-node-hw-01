const fs = require("fs/promises");
const path = require("path");

const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "/db/contacts.json");

class Contacts {
  constructor(path) {
    this.path = path;
  }

  async listContacts() {
    const data = await fs.readFile(this.path);

    return JSON.parse(data);
  }

  async getContactById(contactId) {
    const users = await this.listContacts();
    const resultId = users.find((itm) => itm.id === contactId);
    if (resultId) return resultId;
    return null;
  }

  async addContact(data) {
    const contacts = await this.listContacts();
    const newContact = { id: nanoid(), ...data };
    contacts.push(newContact);
    const addContact = JSON.stringify(contacts, null, 2);
    await fs.writeFile(this.path, addContact);
    return newContact;
  }

  async removeContact(contactId) {
    const contacts = await this.listContacts();

    const removeContact = contacts.findIndex((itm) => itm.id === contactId);
    if (removeContact === -1) {
      return null;
    }
    const [result] = contacts.splice(removeContact, 1);
    await fs.writeFile(this.path, JSON.stringify(contacts, null, 2));
    return result;
  }
}
const file = new Contacts(contactsPath);

module.exports = file;

// contacts.js
// const { writeFile } = require("fs");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");
console.log(contactsPath);

class Contacts {
  constructor(path) {
    this.path = path;
  }
  // TODO: задокументувати кожну функцію
  async listContacts() {
    const data = await fs.readFile(this.path);
    // console.log(JSON.parse(data));
    return JSON.parse(data);
    // ...твій код. Повертає масив контактів.
  }

  async getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
    const users = await this.listContacts();
    // console.log(users);
    const resultId = users.find((itm) => itm.id === contactId);

    console.log("resultId :>> ", resultId);

    if (resultId) return resultId;
    return null;
  }

  async addContact(data) {
    // ...твій код. Повертає об'єкт доданого контакту.
    const contacts = await this.listContacts();
    // console.log(users);
    contacts.push(data);
    const addContact = JSON.stringify(contacts, null, 2);
    return await fs.writeFile(this.path, addContact);
  }

  async removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  }
}
const file = new Contacts(contactsPath);

const users = [
  {
    id: "AeHIrLTr6JkxGE6SN-0Rw",
    name: "Allen Raymond",
    email: "nulla.ante@vestibul.co.uk",
    phone: "(992) 914-3792",
  },
  {
    id: "qdggE76Jtbfd9eWJHrssH",
    name: "Chaim Lewis",
    email: "dui.in@egetlacus.ca",
    phone: "(294) 840-6685",
  },
  {
    id: "drsAJ4SHPYqZeG-83QTVW",
    name: "Kennedy Lane",
    email: "mattis.Cras@nonenimMauris.net",
    phone: "(542) 451-7038",
  },
  {
    id: "vza2RIzNGIwutCVCs4mCL",
    name: "Wylie Pope",
    email: "est@utquamvel.net",
    phone: "(692) 802-2949",
  },
  {
    id: "05olLMgyVQdWRwgKfg5J6",
    name: "Cyrus Jackson",
    email: "nibh@semsempererat.com",
    phone: "(501) 472-5218",
  },
  {
    id: "1DEXoP8AuCGYc1YgoQ6hw",
    name: "Abbot Franks",
    email: "scelerisque@magnis.org",
    phone: "(186) 568-3720",
  },
  {
    id: "Z5sbDlS7pCzNsnAHLtDJd",
    name: "Reuben Henry",
    email: "pharetra.ut@dictum.co.uk",
    phone: "(715) 598-5792",
  },
  {
    id: "C9sjBfCo4UJCWjzBnOtxl",
    name: "Simon Morton",
    email: "dui.Fusce.diam@Donec.com",
    phone: "(233) 738-2360",
  },
  {
    id: "e6ywwRe4jcqxXfCZOj_1e",
    name: "Thomas Lucas",
    email: "nec@Nulla.com",
    phone: "(704) 398-7993",
  },
  {
    id: "rsKkOQUi80UsgVPCcLZZW",
    name: "Alec Howard",
    email: "Donec.elementum@scelerisquescelerisquedui.net",
    phone: "(748) 206-2688",
  },
];

file.listContacts();

file.getContactById("rsKkOQUi80UkkkVPCcLZZW");
file.addContact();
file.removeContact();

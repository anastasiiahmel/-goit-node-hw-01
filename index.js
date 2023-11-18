const contacts = require("./contacts");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const getContact = await contacts.getContactById(id);
      return console.log("getContact :>> ", getContact);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log("newContact :>> ", newContact);

    case "remove":
      const removeContacts = await contacts.removeContact(id);
      return console.log("removeContacts :>> ", removeContacts);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

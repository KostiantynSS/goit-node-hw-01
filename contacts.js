const fs = require("node:fs/promises");
const path = require("node:path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  const answer = await fs.readFile(contactsPath);
  const contacts = JSON.parse(answer.toString());
  // console.table(contacts);

  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contactWithId = contacts.find((contact) => contact.id === contactId);
  console.log(contactWithId || null);

  return contactWithId || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const contactWithId = await getContactById(contactId);
  if (contactWithId) {
    const contactsNew = contacts.filter((contact) => contact.id !== contactId);
    console.log(contactWithId);

    return fs.writeFile(contactsPath, JSON.stringify(contactsNew, null, 2));
  } else {
    console.log(null);
  }
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  console.log(newContact);

  return fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

module.exports = { listContacts, getContactById, addContact, removeContact };

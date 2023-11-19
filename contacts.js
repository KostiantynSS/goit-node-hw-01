const fs = require("node:fs/promises");
const path = require("node:path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  const answer = await fs.readFile(contactsPath);
  const contacts = JSON.parse(answer.toString());

  return contacts;
  // ...твій код. Повертає масив контактів.
}
// getContactById("AeHIrLTr6JkxGE6S-0Rw");
async function getContactById(contactId) {
  const contacts = await listContacts();
  const contactWithId = contacts.find((contact) => contact.id === contactId);
  return contactWithId || null;
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}
// removeContact("AeHIrLTr6JkxGE6SN-0Rw");
async function removeContact(contactId) {
  const contacts = await listContacts();
  const contactWithId = contacts.find((contact) => contact.id === contactId);
  if (contactWithId) {
    const contactsNew = contacts.filter((contact) => contact.id !== contactId);

    fs.writeFile(contactsPath, JSON.stringify(contactsNew, null, 2));
    return contactWithId;
  } else {
    return null;
  }

  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

// addContact("fuu", "ssss@ss,ww", 6966966966);
async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  return fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  // ...твій код. Повертає об'єкт доданого контакту.
}

module.exports = { listContacts, getContactById, addContact, removeContact };

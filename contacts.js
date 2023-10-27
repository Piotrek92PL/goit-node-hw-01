const fs = require('fs');
const path = require('path');

const contactsPath = path.join(process.cwd(), 'db', 'contacts.json');

function listContacts() {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) throw err;
    const contacts = JSON.parse(data);
    console.log(contacts);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) throw err;
    const contacts = JSON.parse(data);
    const contact = contacts.find(item => item.id === contactId);
    console.log(contact);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) throw err;
    const contacts = JSON.parse(data);
    const newContacts = contacts.filter(item => item.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2), err => {
      if (err) throw err;
      console.log('Contact removed');
    });
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) throw err;
    const contacts = JSON.parse(data);
    const newContact = { id: Date.now(), name, email, phone };
    contacts.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), err => {
      if (err) throw err;
      console.log('Contact added');
    });
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

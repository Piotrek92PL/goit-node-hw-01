const fs = require('fs');
const path = require('path');

// Ścieżka do pliku contacts.json
const contactsPath = path.join(process.cwd(), 'db', 'contacts.json');

// Lista wszystkich kontaktów
function listContacts() {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) throw err;
    const contacts = JSON.parse(data);
    console.log(contacts);
  });
}

// Wyszukiwanie kontaktu po ID
function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) throw err;
    const contacts = JSON.parse(data);
    const contact = contacts.find(item => item.id === contactId);
    console.log(contact);
  });
}

// Usuwanie kontaktu
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

// Dodawanie nowego kontaktu
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

// Eksportowanie funkcji
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

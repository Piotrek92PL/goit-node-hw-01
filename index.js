import { listContacts, getContactById, removeContact, addContact } from './contacts.mjs';
import { Command } from 'commander';
const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  console.log('Provided action:', action);
  switch (action) {
    case 'list':
      listContacts();
      break;

    case 'get':
      getContactById(id);
      break;

    case 'add':
      addContact(name, email, phone);
      break;

    case 'remove':
      removeContact(id);
      break;

    default:
      console.warn(
        '\x1B[31m No action provided or unknown action type! Use -a with list, get, add, or remove.'
      );
  }
}

invokeAction(argv);

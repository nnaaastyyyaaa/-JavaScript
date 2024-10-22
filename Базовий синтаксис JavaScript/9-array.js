'use strict';
const phonebook = [
  { name: 'Katya', phone: '+380985673423' },
  { name: 'Sonya', phone: '+380679876543' },
  { name: 'Nastya', phone: '+380682345678' },
];
const findPhoneByName = (name) => {
  for (const i of phonebook) {
    if (i.name === name) return i.phone;
  }
};
console.log(findPhoneByName('Nastya'));

module.exports = { phonebook, findPhoneByName };

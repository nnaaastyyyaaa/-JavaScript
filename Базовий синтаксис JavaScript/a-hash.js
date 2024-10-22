'use strict';
const phonebook = {
  'Katya': '+380985673423',
  'Sonya': '+380679876543',
  'Nastya': '+380682345678',
};
const findPhoneByName = (name) =>  phonebook[name];
console.log(findPhoneByName('Sonya'));

module.exports = { phonebook, findPhoneByName };

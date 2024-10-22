'use strict';
const createUser = (name, city) => {
  const info = { name, city };
  return info;
};
console.log(createUser('Nastya', 'Kyiv'));

module.exports = { createUser };

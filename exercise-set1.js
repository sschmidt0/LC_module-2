/**
 * EXERCISE 3 - Clone Merge
 */

// Clone - return new object
const personA = {
  name: 'Sarah',
  position: 'Frontend'
};

const clone = (source) => ({...source});

const personB = clone(personA);

console.log(`clone to get new object: ---> `, personB);
console.log(`is same object: `, personA === personB);

// Merge - return merged object, source replace some properties from target object

const infoA = { name: "Maria", surname: "Ibañez", country: "SPA" };
const infoB = { name: "Luisa", age: 31, married: true };

const merge = (source, target) => ({...target, ...source});

console.log(`merged object: `, merge(infoA, infoB));

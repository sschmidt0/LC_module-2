/**
 * EXERCISE 1 - Array operations
 */

const elements = ['first element', 'second element', 'third element', 'fourth element'];

// 1. Head - return first element
const head = ([first]) => first;

// 2. Tail - return array without last element
const tail = (arguments) => {
  const newArguments = [...arguments];
  newArguments.pop()
  return newArguments;
};

// 3. Init - return array without first element
const init = (arguments) => {
  const newArguments = [...arguments];
  newArguments.shift();
  return newArguments;
}

// 4. Last - return last element
const last = ([,,,fourth]) => fourth;


console.log(elements);
console.log(`head(elements) --> ${head(elements)}`);
console.log(`tail(elements) --> ${tail(elements)}`);
console.log(`init(elements) --> ${init(elements)}`);
console.log(`last(elements) --> ${last(elements)}`);



/**
 * EXERCISE 2 - Concat
 */

const first = [1, 2, 3];
const second = [4, 5, 6];

const concat = (a, b) => {
  return [...a, ...b];
};

console.log(`first array: ${first} and second array: ${second}`);
console.log(`concat(first, second) --> ${concat(first, second)}`);


// Optional: concat multiples arrays

const third = [7, 8, 9];
const fourth = [10, 11, 12];
const fifth = [13, 14, 15];

const concatMultiple = (...args) => args;

console.log(`concat multiple arrays --> ${concatMultiple(first, second, third, fourth, fifth)}`);



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



/**
 * EXERCISE 5 - Slot Machine
 *
 * El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
 *
 * Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

"Congratulations!!!. You won <número de monedas> coins!!";

y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".
 */

class SlothMachine {
  coins = 0;

  play () {
    this.coins++;

    const booleanA = this.getBoolean();
    const booleanB = this.getBoolean();
    const booleanC = this.getBoolean();

    if (booleanA && booleanB && booleanC) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
    } else {
      console.log('Good luck next time!!')
    }
  }

  getBoolean () {
    const number = Math.floor(Math.random() * 2);
    return (number === 1) ? true : false;
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();

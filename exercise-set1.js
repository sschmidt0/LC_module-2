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

//

const names = ['Cipri', 'Laszlo'];

const fullNames = names.map(function(name){
  return `${name} Druhora`;
});

console.log(fullNames); //Cipri Druhora, Laszlo Druhora

// arrow syntax

// const fullNames2 = names.map((name) => {
//  return `${name} Druhora`;
// });
//
// console.log(fullNames2);

// removing parens

// const fullNames3 = names.map(name => {
//  return `${name} Druhora`;
// });
//
// console.log(fullNames3)

// arrow function implicit return

// const fullNames4 = names.map(name => `${name} Druhora`);
//
// console.log(fullNames4);


// no arguments with arrow functions

// const fullNames5 = names.map(() => `Cipri Bozz`);
//
// console.log(fullNames5);


// arrow functions are always anonymous functions

// function sayMyName(name) {
//   alert(`Hello ${name}`);
// }
//
// const sayMyName = (name) => {alert(`Hello ${name}!`)}
//
// sayMyName('Cipri');

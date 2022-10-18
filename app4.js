// variables : var , let , const 

// var
console.log(' var keyword ');
var firstVariable= 'Hello';
console.log(`Variable : ${firstVariable}`);
 
var firstVariable = 'Hola';
console.log(`After redeclearing : ${firstVariable}`);

firstVariable = 'Aloha';
console.log(`after updating : ${firstVariable}`);


// let variable can't be redeclared but updation is posiible
console.log(' let keyword');
let secondVariable= 'Hello';
console.log(`Variable : ${secondVariable}`);

// let secondVariable = 'Hola';
// console.log(`After redeclearing : ${secondVariable}`);

secondVariable = 'Aloha';
console.log(`after updating : ${secondVariable}`);

// const can't be redecleared and updated
console.log(' const keyword');
const thirdVariable = 'bye';
console.log(`variable : ${thirdVariable}`);

// const thirdVariable = 'goodbye';
// console.log(`After redeclearing : ${thirdVariable}`);

// thirdVariable = 'bye bye';
// console.log(`after updating : ${thirdVariable}`);
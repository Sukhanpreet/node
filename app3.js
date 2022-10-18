// Node package nodemon
// npm install -g nodemon 
// run node app with nodemon : nodemon app3.js
// exit : ctrl + c

console.log("Hello World!");

const a=3;
const b=7;

console.log(a,b,a+b);
console.log('%s',a);


// console.count([label]): The display label for the counter.  Default: 'default'.
console.count();
console.count();

console.count('hello');
console.count('hello');

console.countReset('hello');

console.count('hello');

// console.clear();

console.log('After Clearing the log');

console.warn('warn');
console.info('info');


console.table([{a:1,b:2},{a:3,b:4},{a:5,b:9,c:3,d:4}]);

// console.time();
// console.timeEnd();
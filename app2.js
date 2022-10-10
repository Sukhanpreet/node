// REPL , global , process(.id,.argv), template literal
console.log('REPL');

console.log("dirname : "+__dirname);
console.log("filename : "+__filename);

console.log(process.pid);
console.log(process.argv);
console.log(process.argv[1]);

let first=process.argv[2];
let second=process.argv[3];

let message=`Welcome back ${first} ${second}`;

console.log(message);

// Problem Statement
// Module Assignment

// 1. Open the REPL mode and list the process object. Return the process.ppid and the pid into the terminal.

// 2. Run the node script with 2 arguments: your first name and lastname. Create a node application and output process.argv[2] process.argv[3] into the terminal like the example below. hi Jane Doe

// ------Solution---------

// 1
// open REPL node : node
// console.log(process) or process
// console.log(process.ppid)
// console.log(process.pid)


// 2
const first=process.argv[2];
const second=process.argv[3];

console.log(`hi ${first} ${second}`);
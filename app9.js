
console.log(3**3);

let a='10';
let b=10;

// comparision operators
let val=(a==b);

console.log(a===b);

val=(a>b);
val=(a>=b);
val=(a!==b);

console.log(val);

console.log('-----------------');

// logical operators
let val2 = true && true;  //both true to be true
val2=(true) && (false);
val2=(true) || (false); // one true to be true 
val2=!(true);

console.log(val2);


if(true||false){
    console.log('is true');
}else{
    console.log('is false');
}

const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"


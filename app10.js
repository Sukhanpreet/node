console.clear();
const myArr=['test',18,true,{'one':'one','two':'twotwo'}];

// const myObj={'three':'three','four':'four','five':'five'};
// console.log(typeof myObj, myObj);

console.log(myArr);
console.log(`array length ${myArr.length}`);
console.log('array type '+ typeof myArr);  // type of array is object

// console.log(JSON.stringify (myArr));
console.log(`${myArr[3]['two']}`);

console.log('-----------');

// myArr2 is a referece to the same array as myArr
const myArr2= myArr;

const myArr3= [...myArr];

myArr2[0]='tested';

// myArr[0]='testing';

console.log(`myArr[0] ${myArr[0]}`);
console.log(`myArr2[0] ${myArr2[0]}`)
console.log(`myArr3[0] ${myArr3[0]}`)

console.log('-------------');


// ==============
// Array Methodes
// ==============

console.log(myArr);

// push and unshift add to array
myArr.push(['pushed','pushed too'],{'name':'Sukhan','age':26});
myArr.unshift('unshift');

const myObj={'three':'three','four':'four','five':'five'};
myArr.push(myObj);

// pop and shift remove also return the item removed
let poped=myArr.pop();
console.log(poped);

myArr.shift();

console.log(myArr)




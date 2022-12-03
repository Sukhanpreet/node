// Array methods

console.clear();

let myArr=['one',2,'three',false,5,{'num':6,'name':'six'},[7,'seven']];

// add at the end ===========================
for(let i=0;i<5;i++){
    // myArr[myArr.length]='counter '+i;
    myArr.push(`counter ${i}`);
}

// remove from the end======================
for(let i=0;i<2;i++){
    // myArr.length -= 1;
    const poped= myArr.pop();
    console.log(poped);
}

// // add at the front========================
// let temp=[];
// for(let i=4;i>=0;i--){
//     temp[temp.length]=`counter ${i}`;
// }

// for(let i=0;i<myArr.length;i++){
//     temp[temp.length]=myArr[i];
// }
// myArr=temp;

for(let i=0;i<5;i++){
    myArr.unshift(`counter ${i}`);
}


// // remove for front ========================
// function removeFirst(arr){
//     let temp=[];
//     for(let i=1;i<arr.length;i++){
//         temp[temp.length]=arr[i];
//     }
//     arr=temp;
//     return arr;
// }
// myArr=removeFirst(myArr);

myArr.shift();

// console.log(myArr);
// console.log(1);

// setTimeout(()=>{
//     console.log(2);
// },0);
// console.log(3);


console.log('00000000000');

// console.log(1);
// setImmediate(()=>{
//     console.log(2);
// });

// setTimeout(()=>{
//     console.log(3);
// },0);

// console.log(4);


// setImmediate(()=>{
//     console.log(1);
// })

// process.nextTick(()=>{
//     console.log(2);
// })

// console.log(3);

// try{
//     console.log(val);
// }
//  catch(err){
//     console.log('ERROR');
//  }


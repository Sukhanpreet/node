// Function expression
const fun1 = function(a,b,c){
    const result= a + b + c;
    return result;
}

const val1=fun1(5,5,5);
const val2=fun2(6,6,6);

console.log(val1);
console.log(val2);

// Function declearation
function fun2(a,b,c){
    const result= a + b + c;
    return result;
}

// IIFE
(function(a,b,c){
    const result= a + b + c;
    console.log(result);
})(7,7,7);

// IIFE with return
const fun3=(function(a,b,c){
    const result= a + b + c;
    return result;
})(7,7,7);

console.log(fun3);

// IIFE with Arrow 
(()=>{
    console.log('IIFE with Arrow function');
})();

// Arrow function ES6
const fun4 = (a,b,c)=>{
    const result= a + b + c;
    return result;
}

const val3=fun2(9,9,9);
console.log(val3);

const fun5 =(a,b,c)=> a*b*c;
console.log(fun5(5,5,5));

const fun6 = () => 'Hello Again';
console.log(fun6());

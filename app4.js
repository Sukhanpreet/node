// variables : var , let , const 
// let variable can't be redeclared but updation is posiible
// const can't be redecleared and updated


let firstVariable = 'hello';
console.log(firstVariable+' ' + typeof firstVariable);

firstVariable =true;
console.log(firstVariable+' ' + typeof firstVariable);

{
    let firstVariable=84;
    console.log(firstVariable);
    firstVariable='Hello World';
    console.log(firstVariable);
}
console.log(firstVariable);

let arr=[2,4,'klj'];
console.log(typeof arr);
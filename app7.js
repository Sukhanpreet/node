// function closure


function main(val){
    const a = val+1;
    return function sub(b){
        console.log(a,b);
        return a+b;
    }
}

const fun1=main(10);
const fun2=main(5);

console.log(fun1(15));
console.log(fun2(15));


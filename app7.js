// function closure


// function main(val){
//     const a = val+1;
//     return function (b){
//         console.log(a,b);
//         return a+b;
//     }
// }
function main(val){
    const a = val+1;
    return (b)=>{
        console.log(a,b);
        return a+b;
    }
}

const fun1=main(10);
const fun2=main(5);

console.log(fun1(15));
console.log(fun2(15));

console.log(fun1);


if (Math.random() > 0.5) {
    let x = 1;
  } else {
    var x = 2;
  }
  console.log(x);

console.log('--------------');
// closure 
  
  function returnFun(){
      const a=()=>{
        let x=1;
        console.log(`inside a ${x}`);
        const b=()=>{
            // let x=2;
            console.log(`inside b ${x}`);
            const c=()=>{
                let x=3;
                console.log(`inside c ${x}`);
            }
            x=45;
            c();
        }
        x=78;
        b();
      }
      x=23;
      return a;
  }
  const fun3=returnFun();
  fun3();
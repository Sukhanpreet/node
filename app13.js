const myArr=[1,2,3,4,'five'];

const myObj={fname:'sukhan',
            lname: 'ka',
            age: 26
            };

console.log(myObj);


for(let i=0;i<myArr.length;i++){
    console.log(myArr[i]);
}

myArr.forEach((val)=>{
    console.log(val);
})


for(key in myObj){
    console.log(key,myObj[key]);
}


const c =Object.entries(myObj);

console.log(c);

Object.entries(myObj).forEach((val,index,arr)=>{
    console.log(val,index);
});

console.log(Object.keys(myObj));

console.log(Object.values(myObj).map((elem)=>(elem+' ok')));

let d=[];
Object.keys(myObj).forEach((val)=>(d.push(val+' okkk')));
console.log(d);
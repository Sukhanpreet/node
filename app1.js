console.log('hello world!');

for(let i=0;i<5000;i++){
    console.log(i);

    if(i== 3000){
        process.exit();
    }
}

console.log(process);
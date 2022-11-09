// More on Functions
function loop1(val){
    if(val<0){
        return;
    }
    console.log(val);
    return loop1(val-1);
}

loop1(7);

console.log("--------------");

function loop2(val){
    if(val>55){
        console.log(val);
        return loop2(val-1);
    }
    loop1(5);
    return 'end';
}

const val=loop2(60);
console.log(val);

console.log("--------------");

function loop3(val){
    if(val<=0){
        console.log('hello');
        return;
    }else{ 
        const temp=val-1;
        loop3(temp);
        console.log(val);
    }
}

loop3(10);
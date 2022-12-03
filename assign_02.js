let friends=[];


function addFriends(fname,lname){
    let obj={'First': fname,'Last': lname};
    friends.push(obj);
}

addFriends('Fname 1','Lname 1');
addFriends('Fname 2','Lname 2');
addFriends('Fname 3','Lname 3');
addFriends('Fname 4','Lname 4');
addFriends('Fname 5','Lname 5');
addFriends('Fname 6','Lname 6');
addFriends('Fname 7','Lname 7');
addFriends('Fname 8','Lname 8');

function showFriends(friends){
    // for(let i=0;i<friends.length;i++){
    //     console.log(`firstname ${friends[i]['First']} lastname ${friends[i]['Last']}`);
    // }

    friends.forEach((val)=>{console.log(`firstname ${val['First']} lastname ${val['Last']}`);})
}


showFriends(friends);

let a=7*2+10-1+'1'+0

console.log(a);



const myObj={
    first: 'jhd',
    last: 'jdhjk',
    city: 'hjmhd'
}


for(key in myObj){
    console.log(key,myObj[key]);
}


function ranNum(min,max){
    return Math.floor(Math.random()*max)+min;
}

console.log(ranNum(5,10));
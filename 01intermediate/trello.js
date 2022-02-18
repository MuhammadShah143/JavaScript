// const toDo=[]

// toDo.push('Wake Up')
// toDo.push('Go TO Gujrat')
// toDo.push('Meet Bunty')

// toDo.forEach(function (todo,i) {
//     console.log(`Your Task NO. ${i+1} Is: ${todo}`);
// })

const top=[]
top.push('Wake Up')
top.push('Go TO Gujrat')
top.push('Meet Bunty')

//var length = top.length;
for (let i = top.length-1; i>=0; i--) {
    console.log(top[i]);
    //Do something
}


//forEachLoop

const days=['Mon','Tue',"Wed",'Thu','Fri','Sat','Sun']
days.forEach(function (day, index) {
    console.log(`Start With ${index+1} ------- ${day}`);
    
})
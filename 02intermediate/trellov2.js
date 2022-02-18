let myTodo={
    day:'Monday',
    meetings:0,
    meetdone:0,
}

let addMeetings= function (todo, meet=0) {
    todo.meetings=todo.meetings+meet
   
    
}

let meetDone= function (todo, meet) {
    todo.meetdone= todo.meetdone-meet
    
    //console.log(todo);
}



let daySummery=function (todo) {
    let meetLeft=todo.meetings - todo.meetdone
    return `You have ${meetLeft} remainings`
}

addMeetings(myTodo,4)
addMeetings(myTodo,2)
meetDone(myTodo,1);
console.log(daySummery(myTodo));
//let res= daySummery(myTodo)
//console.log(res);
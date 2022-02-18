let myTodo={
    day:'Monday',
    meetings:0,
    meetdone:0,

    addmeetin : function (num) {
        this.meetings=this.meetings+num
    },
    meetDone:function(num){
       this.meetdone=this.meetdone-num
    },
    summary: function () {
        return `you have ${this.meetings+this.meetdone} meetings remainings`
    },
    rest:function(){
        this.meetdone=0
        this.meetings=0
        return`after reseting values here ${this.meetings} and ${this.meetdone}`
    }
}

myTodo.addmeetin(10)
myTodo.meetDone(3)
console.log(myTodo.rest());
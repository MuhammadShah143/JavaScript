// const sayHello= function (name) {
//     return 'hey there '+name+'!'
// }
// console.log(sayHello("bunnty"));

// const sayHello=  (name) => {`hey there ${name}`}

// console.log(sayHello("bunnty"));

// const todos=[{
//     title:'buy bread' ,
//     isDone:false,
// },{
//     title:'Go To Gym',
//     isDone:true
// },{
//     title:'record youtube videos',
//     isDone:true
// }]
 
// const things= todos.filter((todos)=>todos.isDone=== true)

// console.log(things);



//assinement
// const todos=[{
//     title:'buy bread' ,
//     isDone:false,
// },{
//     title:'Go To Gym',
//     isDone:true
// },{
//     title:'record youtube videos',
//     isDone:true
// },{
//     title:'upload the video' ,
//     isDone:false,
// },{
//     title:'eat dinner',
//     isDone:true
// },{

//     title:'go to sleep',
//     isDone:false
// }
// ]

// const isNotDone = todos.filter((todos)=>todos.isDone===false)

// console.log(isNotDone);






//arrow and this keyword
const camera= {
    price:600,
    weight:2000,
    myDes:function() {
        return`the price of this camera is ${this.price}$  `
   }
}

console.log(camera.myDes());
//const myTodos= ['buy bread','go to gym','record youtube videos']

//console.log(myTodos.indexOf('buy bread'));


const newTodos=[{
    title:'buy bread' ,
    isDone:false,
},{
    title:'Go To Gym',
    isDone:false
},{
    title:'record youtube videos',
    isDone:true
}]
 
// const index = newTodos.findIndex(function (todo, index) {
//     console.log(todo);
//     return todo.title === 'go to gym'
// })

// console.log(index)

// const findTodo= function (myTodos, title ) {
//     const index=myTodos.findIndex(function (todo, index) {
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }
// let p = findTodo(newTodos, 'Go To gym')
// console.log(p);



const findTodo= function (myTodos,title) {
    const titleReturned = myTodos.find(function(todo, index){
        return todo.title.toLowerCase()===title.toLowerCase()
    })
    return titleReturned
}
let p = findTodo(newTodos, 'Go To gym')
 console.log(p);



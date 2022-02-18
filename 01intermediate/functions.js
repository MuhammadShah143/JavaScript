let myfun= function (ab) {
    let a = ab
    console.log("Greetinds Message For User");
    console.log(`hey ${ab}`);
}

// let ab = ' Jhon'
// console.log(ab);
//myfun('john') 

let fullName= function (firstname, lastname) {
    console.log('Welcome to lco');
    console.log(`Happy to have you, ${firstname} ${lastname}`); 
}
//fullName('jhon','Doe')

//Assignment
let myAdder=function(num1, num2){
    let add=num1+num2
    return add
}

// let res = myAdder(5,9)
// console.log(res);

let myMultiplier = function (num1, num2) {
    let multi =num1*num2
    return multi
}

// let res = myMultiplier(2,2)
// console.log(res);

let userGuest  =function (nam='unName', courseCount = 0) {
    return 'Helo ' + nam +' Your Course Count Is :' + courseCount}

    console.log(userGuest('John', 5));
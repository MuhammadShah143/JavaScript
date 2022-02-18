let userName ='user123gmail.com'
let pass='123456'

let userCheck=function (myString) {
    if (myString.includes('@gmail.com')&&(myString.length>6)) {
        return true
    } else 
        return false
    
}
console.log(userCheck(userName));

let passCheck=function (pass) {
    if ((pass.includes(1234))&&(pass.length>5)) {
        return true
    } else 
        return false
}

console.log(passCheck(pass));
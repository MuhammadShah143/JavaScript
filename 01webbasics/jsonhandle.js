const student={
    name:'ali',
    age:22,
    //isActive=true
}
//convert it into a string and store it into the local storage

const studentObjToString=JSON.stringify(student)
console.log(typeof studentObjToString);
//localStorage.setItem('student',studentObjToString)

//comvert back string to jason
const toJson=JSON.parse(studentObjToString)
console.log(typeof toJson);
console.log(toJson.age );
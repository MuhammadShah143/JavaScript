var shah={
    name:' my name is shah',
    age:22,
    isActive:false 
}
var bunty={
    name:' my name is bunty',
    age:27,
    isActive:false 
}
var bublo={
    name:' my name is bublo',
    age:22,
    isActive:false 
}

let users = new Map()
//
users.set('shah', shah)
users.set('bunty', bunty)
users.set('bublo', bublo)
// console.log( users.size);
// console.log(users.get('shah'));

// console.log(users.values());

// for (const value of users.values()) {
//     console.log(value.age);
// }

// for (const [key, valuclse] of users.entries()) {
//     console.log(key + '='+ value.age);
// }

//assignment
// for (const [key, value] of users.entries()) {
//     console.log(`${key} = ${value.name}`);
    
// }


// users.forEach((value, key) =>  console.log(key + '='+ value.name));

// var arrofArr=[['one','1'],['tow','2'],['three','3']]
// var newmap=new Map(arrofArr)
// console.log(arrofArr);
// var arrofArr=[['one','1'],['tow','2'],['three','3']];
// var newMap =new Map(arrofArr)
// for ([key, value]  of newMap.entries()) {
//     console.log(`${key} = ${value}`);
// }

var arr=[['one','1'], ['two','2']]
var asd=new Map(arr)
for ([key, value] of asd.entries()) {
    console.log(`${key} = ${value}`);
}


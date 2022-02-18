class User{
    constructor(firstName, lastName,middleName, credit){
        this.firstName=firstName
        this.middleName=middleName
        this.lastName=lastName
        this.credit=credit
        
    }

    getFullName(){
        return `${this.firstName} ${this.lastName} is my full name`;

        // do it in just
    }

    // getMiddleNAme(){
    //     return `${this.firstName} ${this.middleName} ${this.lastName} my fulll name`
    // }

    editName(newNAme){
        const myName= newNAme.split(" ")
        this.firstName=myName[0]
       // this.middleName=myName[1]
        this.lastName=myName[1]
    }

}

class Teacher extends User{
    constructor(firstName, lastName, credit,subject){
        super(firstName, lastName, credit)
        this.subject=subject
    }
    getFullName(){
        return `${this.firstName} ${this.lastName} is my full name and  teach  ${this.subject}`;

        // do it in just
    }
    drink(as){
        console.log(`my favourite drink is ${as}`);
    }
   
    
}

const john=new Teacher('Usama', 'Tariq',90,'java')   
//const sam=new User()   
console.log(john.getFullName());
john.editName('Asad shah')
console.log(john.getFullName());

john.drink('Dew')
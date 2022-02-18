let getMyGrade =function (myMarks,totalMarks ) {
    let percentage = (myMarks/totalMarks)*100
    let grade =''
    if (myMarks>=90) {
        grade='A'
    } else if(myMarks>=80){
        grade='B'
    }else if (myMarks>=70) {
        grade='C'
    }else if (myMarks>=60) {
        grade="D"
    }else{
        grade='F'
    }
    return `your Grade is ${grade} and Percentage is ${percentage}`
}

let yourResult= getMyGrade(82,150)
console.log(yourResult);
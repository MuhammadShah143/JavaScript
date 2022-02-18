// alret ('File is attached')
// const myElement = document.querySelectorAll('.classone')
// console.log(myElement[0]);
// const myPElement= document.querySelector('p')
// // console.log(myPElement);
// // console.log(myPElement);
// myPElement.textContent=' i am being chnaged using js'
// myPElement.textContent=' i am being chnaged using js'

////
//  const myPElement=document.querySelectorAll('p')
//  myPElement.forEach((p)=> p.textContent=' i am chnaged using loop in js')

//console.log(document.title);
//document.title='i got changed'

// console.log(document.getElementsById('idone '));
// console.log(document.getElementsByClassName('classone '));

// const myElement =document.querySelectorAll('#idone')
// console.log(myElement [0]);

const myPara=document.createElement('p')
myPara.textContent='i was added via js'
document.querySelector('body').appendChild(myPara)

document.querySelector('button').addEventListener('click',(e)=>{
    e.target.textContent='i was clicked'
})

//track input form
document.querySelector('#myForm').addEventListener('input',(e)=>{
    console.log(e.target.value);
})
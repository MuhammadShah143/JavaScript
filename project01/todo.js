//// H1 textnode

// var h=document.createElement("h1")
// var myValues=document.createTextNode('Hello World')
// h.appendChild(myValues);
// document.querySelector('h1').appendChild(h);

////while loop

// let value =5
// while (value>0) {
//     console.log(value);
//     value--
// }

var ul=document.getElementById('list')
var li;

var addButton=document.getElementById('add')
addButton.addEventListener('click', additem)

var removeButtton=document.getElementById('remove')
removeButtton.addEventListener('click', removeItem)

function additem() {
   // console.log('add button');
   var input =document.getElementById('input')
   var item=input.value
   ul=document.getElementById('list')
   var textnode=document.createTextNode(item)
   if (item==='') {
    var p=document.createElement('p')
    var t=document.createTextNode('Add a Todo!')
   p.appendChild(t)
   p.setAttribute('id','errormsg')
   var msg=document.querySelector('#msg').append(p)
    setTimeout(()=>{
        document.getElementById('errormsg').remove()
    },1500)
    return false
   } else {
       // craete li
       li=document.createElement('li')
       //create a checkbox
       var checkbox=document.createElement('input')
       checkbox.type='checkbox'
       checkbox.setAttribute('id','check')
       //create lebel
       var label = document.createElement('label')
       label.setAttribute('for', 'item')//optional

       //add these elemnets on webpage
       ul.appendChild(label);
       li.appendChild(checkbox);
       label.appendChild(textnode)
       li.appendChild(label)
       ul.insertBefore(li, ul.childNodes[0])
       setTimeout(() => {
        li.className='visual'
       }, 1);
       input.value=''
   }

}

function removeItem() {
    li=ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
            
        }
        
    }
}
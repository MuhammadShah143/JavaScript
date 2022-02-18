// alert('connected')

function myValidation() {
    let myValue=document.getElementById('myForm').value;

    if(isNaN(myValue)|| myValue<1 || myValue>20) {
        console.log('invalid input');
    }else{
        console.log('this input is ok');
    }
}


//assignment

let newValue=document.getElementById('myForm').value;
if ((isNaN)||newValue<1||newValue>20) {
    document.querySelector('#idone').textContent='invalid input'
}else{
    document.querySelector('#idone').textContent='invalid input'
}

//form validation
document.querySelector('.myForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e.target.usernamer.value);
    console.log(e.target.realname .value);
    e.target.usernamer.value='';
    e.target.realname.value='';
})
///assignmt for signup

document.querySelector('.signUp').addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    console.log(e.target.rePassword.value);

    e.preventDefault();
    const user_name=e.target.username.value;
    const password=e.target.password.value;
    const password_two=e.target.rePassword.value;
    localStorage.setItem('user',user_name);
         if ((password == password_two) && (password.length>8)){
             alert('ACCOUNT HAS BEEN CREATED SUCCESSFULLY')
            // const a= document.createElement('p');
            // const textnode=document.createTextNode("ACCOUNT HAS BEEN CREATED SUCCESSFULLY");
            // const placing= a.appendChild(textnode);
            // document.querySelector('form').appendChild(placing);
          }
          else if( password.length <8)
          {
             alert('passwords do not match');
          }
          else{
             alert("wrong inputs ");
          }
})






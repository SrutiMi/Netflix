const submit=document.querySelector('.submit');
submit.addEventListener('click',()=>{
  const email=document.querySelector('#email-field');
  const emailNumber=email.value;
  const password=document.querySelector('#password-field').value;
  // console.log(emailNumber);
  
  //For now i am just checking whether the field is empty or not and not checking the validity of the field
  if(emailNumber ===" "||emailNumber ===""){
    const inputErr = document.querySelector('.email-field-err');
    
    inputErr.innerHTML ="Please enter a valid email address or phone number."
    inputErr.classList.add("underline");

   
  }
  if(password ===" "||password ===""){
    const passwordErr = document.querySelector('.password-field-err');
    passwordErr.innerHTML ="Your password must contain between 4 and 60 characters."
    emailNumber.classList.add("underline");
  }
})
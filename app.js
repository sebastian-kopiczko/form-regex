// form inputs
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const zipcode = document.getElementById('zipcode');

// event listeners
username.addEventListener('blur', validateUsername);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);
zipcode.addEventListener('blur', validateZipcode);

// toggle classes on inputs and help notes below
function toggleValidationClasses(element, regex){
  const invalidClass = 'is-danger';
  const validClass = 'is-success';
  const hiddenClass = 'is-hidden';

  if(!regex.test(element.value)){
    element.classList.add(invalidClass);
    element.parentElement.nextElementSibling.classList.remove(hiddenClass);
  } else {
    element.classList.remove(invalidClass);
    element.classList.add(validClass);
    element.parentElement.nextElementSibling.classList.add(hiddenClass);
  }
}

function validateUsername(){
  const regex = /^[A-Za-z]{2,12}$/;
  toggleValidationClasses(username, regex);
}

function validateEmail(){
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  toggleValidationClasses(email, regex);
}

function validatePhone(){
  const regex = /^\d{3}-?\d{3}-?\d{3}$/;
  toggleValidationClasses(phone, regex);
}

function validateZipcode(){
  const regex = /^[0-9]{2}\-[0-9]{3}$/;
  toggleValidationClasses(zipcode, regex);
}

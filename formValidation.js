const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#passwordCheck');

form.addEventListener('submit',(e) => {
  e.preventDefault();
  checkInputs();
})

let checkInputs = () => {
  let usernameValue = username.value;
  let emailValue = email.value;
  let passwordValue = password.value;
  let passwordCheckValue = passwordCheck.value;

  isBlank(username, usernameValue);
  isBlank(email, emailValue);
  isEmail(email, emailValue);
  isBlank(password, passwordValue);
  isBlank(passwordCheck, passwordCheckValue);
  if (passwordValue !== passwordCheckValue) {setErrorFor(passwordCheck, 'Passwords do not match')}
}

let isBlank = (inputName, inputValue) => {
  if (inputValue === '') {
    setErrorFor(inputName,`${inputName.name} cannot be blank`)
  }
  else {
    setSuccessFor(inputName)
  };
}

let isEmail = (email, emailValue) => {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(emailValue)) {setSuccessFor(email)} else {setErrorFor(email, 'Email is not valid')}
}

let setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'form-control error'
}

let setSuccessFor = (input) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  formControl.className = 'form-control success'
}

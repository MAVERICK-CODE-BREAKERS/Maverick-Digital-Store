form = document.querySelector('form')
username = document.getElementById('Username')
password = document.getElementById('Password')

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  validate()
})

function validate(){
  uservalue = username.value.trim();
  passvalue = password.value.trim();

  if (uservalue == ''){
    DisplayError(username, 'Username Cannot Be Blank')
  }else{
    SetSucessMessage(username)
}
  if (passvalue === ''){
    DisplayError(password, 'Password Cannot Be Blank')
  }else{
    SetSucessMessage(password)
  }
}

function DisplayError(inputid, message){
  controlform = inputid.parentElement;
  smallText = controlform.querySelector('small');

  smallText.innerText = message;
  controlform.className = 'input-container error'

}

function SetSucessMessage(inputid){
  const controlform = inputid.parentElement;

  controlform.className = 'input-container success'
}

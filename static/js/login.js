form = document.querySelector('form')
username = document.getElementById('Username')
password = document.getElementById('Password')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validate()
})

function validate(){
  uservalue = username.value.trim();
  passvalue = password.value.trim();

  if (uservalue == ''){
    DisplayError(username, 'Username Cannot Be Blank')
  }
  if (passvalue === ''){
    DisplayError(password, 'Password Cannot Be Blank')
  }
}


function DisplayError(inputid, message){
  controlform = inputid.parentElement;
  smallText = controlform.querySelector('small');

  smallText.innerText = message;
  controlform.className = 'input-container error'

}
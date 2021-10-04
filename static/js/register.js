const form = document.querySelector('form')
const fullname = document.getElementById('Fullname')
const username = document.getElementById('P-username')
const usermail = document.getElementById('user-mail')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const Cpassword = document.getElementById('c-password')

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   SignupValidaton()
// })

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  SignupValidaton()
})

function SignupValidaton(){
  let FnameVal = fullname.value.trim();
  let usernameval = username.value.trim();
  let usermailval = usermail.value.trim();
  let phoneval = phone.value.trim();
  let passwordval = password.value.trim();
  let password2 = Cpassword.value.trim();
  
  if (FnameVal == ''){
    DisplayError(fullname, 'Name Cannot Be Empty')
  }else{
    SetSucessMessage(fullname)
  }
  if (usernameval == ''){
    DisplayError(username, 'Enter A Preffered Username')
  }else{
    SetSucessMessage(username)
  }
  if (usermailval == ''){
    DisplayError(usermail, 'Username Cannot Be Empty')
  }else{
    SetSucessMessage(usermail)
  }
  if (phoneval == ''){
    DisplayError(phone, 'Phone Number Cannot Be Empty')
  }else{
    SetSucessMessage(phone)
  }
  if (passwordval == ''){
    DisplayError(password, 'Passsword Cannot Be Empty')
  }else{
    SetSucessMessage(password)
  }
  if (password2 === ''){
    DisplayError(Cpassword, 'Password Cannot Be Empty')
  }
  else if (passwordval != password2) {
    DisplayError(Cpassword, 'Password Does Not Match')
  } else {
    SetSucessMessage(Cpassword)
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

// ADDING USER DATA TO DATA BASE
 function AddUser(){
   let all_users = JSON.parse(localStorage.getItem('userdb'));

   if (all_users == null){
     all_users = []
   }

   let User = {
     'fullname' : fullname.value,
     'username' : username.value,
     'email' : usermail.value,
     'phoneNumber' : phone.value,
     'password' : password.value
   }

   all_users.push(User)
   localStorage.setItem('userdb', JSON.stringify(all_users))
 }

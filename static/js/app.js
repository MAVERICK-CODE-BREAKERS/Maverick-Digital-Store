new WOW().init();

//  for from to accept only alphabets

function a(event) {
  var char = event.which;
  if (char >31 && char !=32 && (char <65 || char >90) && (char <97 || char >122)) {
    return false;
  }
}
document.getElementById('submit').addEventListener('click',validateForm)
function validateForm(){
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var message=document.getElementById('message').value;
  var contact= document.getElementById('contact');
  const output = document.getElementById('output');
  const result = output.className= ' alert alert-danger';

if (name == null || name== "") {
output.innerHTML= 'Fill Name';
setTimeout(clearError,3000);
return false;
}
if (email=="" ) {
  output.innerHTML=' Fill Email';
  setTimeout(clearError,3000);
  return false;
}
if (message =="") {
  output.innerHTML='Fill message';
  setTimeout(clearError,3000);
  return false;
 }
 else {
  output.innerHTML='Succesfully Submitted';
  return true;
}
 }
 function clearError(){
    document.querySelector('.alert').remove();
}
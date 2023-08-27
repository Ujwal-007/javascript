function onSubmit(event){
    event.preventDefault();
var name=document.getElementById('name').value;
var email=document.getElementById('email').value;
var gender=document.querySelector('input[name="gender"]:checked').value;
document.getElementById('formData').innerHTML="Name: "+ name +"<br> Email: "+ email +"<br> Gender: "+gender;

}
window.onload=function(){
    document.getElementById('contactForm').addEventListener('submit',onSubmit);

}
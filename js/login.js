const form = document.getElementById("loginForm");

form.addEventListener("submit",function(e){

e.preventDefault();

const username=document.getElementById("username").value;

const password=document.getElementById("password").value;

const error=document.getElementById("error");

if(username==="admin" && password==="kora2026"){

window.location.href="home.html";

}

else{

error.innerHTML="Invalid Username or Password.";

}

});
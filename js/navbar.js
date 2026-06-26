/* ===========================================
NAVBAR
=========================================== */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(7,20,13,.95)";

navbar.style.backdropFilter="blur(20px)";

navbar.style.boxShadow="0 12px 30px rgba(0,0,0,.25)";

}

else{

navbar.style.background="rgba(7,20,13,.82)";

navbar.style.boxShadow="none";

}

});
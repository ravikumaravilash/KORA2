/* ==========================================================
   KORA DASHBOARD
========================================================== */

document.addEventListener("DOMContentLoaded",()=>{

/* ==========================================================
ACTIVE SIDEBAR
========================================================== */

const sections=document.querySelectorAll("main section");

const navLinks=document.querySelectorAll(".sidebar-menu a");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const id=entry.target.getAttribute("id");

navLinks.forEach(link=>{

link.parentElement.classList.remove("active");

if(link.getAttribute("href")==="#"+id){

link.parentElement.classList.add("active");

}

});

}

});

},

{

threshold:.4

});

sections.forEach(section=>{

observer.observe(section);

});

/* ==========================================================
SMOOTH SCROLL
========================================================== */

navLinks.forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(

link.getAttribute("href")

);

target.scrollIntoView({

behavior:"smooth"

});

});

});

/* ==========================================================
THERAPY BUTTONS
========================================================== */

const therapyButtons=

document.querySelectorAll(".therapy-buttons button");

therapyButtons.forEach(button=>{

button.addEventListener("click",()=>{

therapyButtons.forEach(btn=>{

btn.classList.remove("selected");

});

button.classList.add("selected");

showNotification(

button.innerText+

" Activated"

);

});

});

/* ==========================================================
STATUS
========================================================== */

const status=document.querySelector(

".connection-status strong"

);

let connected=true;

setInterval(()=>{

connected=!connected;

status.innerHTML=

connected?

"Connected":

"Disconnected";

status.style.color=

connected?

"#66BB6A":

"#EF5350";

},12000);

/* ==========================================================
PROGRESS
========================================================== */

const progress=

document.querySelector(".progress-circle");

let value=0;

const target=85;

const timer=setInterval(()=>{

value++;

progress.innerHTML=value+"%";

if(value>=target){

clearInterval(timer);

}

},18);

/* ==========================================================
NOTIFICATION
========================================================== */

const notification=

document.createElement("div");

notification.className=

"notification";

document.body.appendChild(notification);

function showNotification(message){

notification.innerHTML=message;

notification.classList.add("show");

setTimeout(()=>{

notification.classList.remove("show");

},2500);

}

/* ==========================================================
PLANT CARD EFFECT
========================================================== */

const cards=

document.querySelectorAll(".plant-card");

cards.forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=

card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty(

"--x",

x+"px"

);

card.style.setProperty(

"--y",

y+"px"

);

});

})


/* ==========================================================
DASHBOARD SEARCH
========================================================== */

const searchInput=document.getElementById("dashboardSearch");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

document.querySelectorAll("section").forEach(section=>{

const text=section.innerText.toLowerCase();

section.style.display=

text.includes(value)?"block":"none";

});

});

}

/* ==========================================================
LIVE COMMUNITY FEED (DEMO)
========================================================== */

const feedMessages=[

"New rehabilitation article published.",

"Community member shared an Ayurvedic experience.",

"Plant encyclopedia updated.",

"Weekly therapy guide available.",

"Consultation slots have been refreshed."

];

const communityCard=document.querySelector(".community-card p");

if(communityCard){

let index=0;

setInterval(()=>{

index=(index+1)%feedMessages.length;

communityCard.textContent=feedMessages[index];

},8000);

}

/* ==========================================================
THERAPY SESSION TIMER
========================================================== */

const therapyTimer=document.getElementById("therapyTimer");

if(therapyTimer){

let seconds=0;

setInterval(()=>{

seconds++;

const min=Math.floor(seconds/60);

const sec=seconds%60;

therapyTimer.textContent=

`${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

},1000);

}

/* ==========================================================
DAILY WELLNESS QUOTE
========================================================== */

const quotes=[

"Consistency is the foundation of recovery.",

"Traditional knowledge and modern technology can complement each other.",

"Small improvements every day lead to lasting progress.",

"Understanding your body is the first step toward better health.",

"Learning never stops."

];

const quoteElement=document.getElementById("dailyQuote");

if(quoteElement){

const today=new Date().getDate();

quoteElement.textContent=

quotes[today%quotes.length];

}

/* ==========================================================
RECENT ACTIVITY ANIMATION
========================================================== */

const timeline=document.querySelector(".timeline");

if(timeline){

setInterval(()=>{

const first=timeline.firstElementChild;

timeline.appendChild(first);

},10000);

}

/* ==========================================================
BUTTON RIPPLE EFFECT
========================================================== */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ==========================================================
WELCOME MESSAGE
========================================================== */

setTimeout(()=>{

const message=document.createElement("div");

message.className="notification show";

message.textContent="Welcome back to KORA.";

document.body.appendChild(message);

setTimeout(()=>{

message.classList.remove("show");

setTimeout(()=>{

message.remove();

},500);

},3000);

},800);
function logout(){

    localStorage.removeItem("koraLoggedIn");
    localStorage.removeItem("koraUser");

    window.location.href = "index.html";

}

});
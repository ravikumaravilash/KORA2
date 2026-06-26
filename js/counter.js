/* ===========================================
   KORA COUNTER ANIMATION
=========================================== */

document.addEventListener("DOMContentLoaded",()=>{

const counters=document.querySelectorAll("[data-target]");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter(entry.target);

observer.unobserve(entry.target);

}

});

},

{

threshold:.6

});

counters.forEach(counter=>{

observer.observe(counter);

});

});

function startCounter(counter){

const target=Number(counter.dataset.target);

const duration=2000;

const step=Math.max(1,Math.ceil(target/120));

let current=0;

const timer=setInterval(()=>{

current+=step;

if(current>=target){

current=target;

clearInterval(timer);

}

counter.textContent=current;

},duration/120);

}
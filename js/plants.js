const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".plant-card");

searchInput.addEventListener("keyup", function(){

const value = searchInput.value.toLowerCase();

cards.forEach(card=>{

const plant=

card.dataset.name.toLowerCase();

if(plant.includes(value)){

card.style.display="flex";

}

else{

card.style.display="none";

}

});

});

const filters=document.querySelectorAll(".filter");

filters.forEach(button=>{

button.addEventListener("click",()=>{

filters.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

const category=

button.dataset.filter;

cards.forEach(card=>{

if(category==="all"){

card.style.display="flex";

return;

}

if(card.dataset.category===category){

card.style.display="flex";

}

else{

card.style.display="none";

}

});

});

});
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(

".plant-card,.knowledge-card,.fact"

).forEach(el=>{

observer.observe(el);

});
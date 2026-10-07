document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());
const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
if(toggle){toggle.addEventListener("click",()=>nav.classList.toggle("open"));document.querySelectorAll("#nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")))}

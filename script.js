let navbar = document.getElementById("nav");
let nava = document.getElementsByClassName("nava")
window.onscroll = () => {
    "use strict";
    if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navbar.classList.add("nav-scrolled");
        for(let i=0; i<nava.length; i++) { 
            nava[i].style.color='white';
          }
    } else {
        navbar.classList.remove("nav-scrolled");
        for(let i=0; i<nava.length; i++) { 
            nava[i].style.color='black';
          }
    }
}



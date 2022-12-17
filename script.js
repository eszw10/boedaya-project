let navbar = document.getElementById("nav");
let nava = document.getElementsByClassName("nava")
window.onscroll = () => {
    "use strict";
    if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
}

function peringatan() {
    alert('Silahkan Sign Up atau Login terlebih dahulu!')
}


let navbar = document.getElementById("nav");
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

function goHome() {
    location.href = '../main-page/user.html'
}

function home() {
    location.href = '../main-page/index.html'
}


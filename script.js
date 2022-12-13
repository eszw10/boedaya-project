let navbar = document.getElementById("nav");
window.onscroll = () => {
    "use strict";
    if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
}

let grayscale = document.getElementById('img-gray');
grayscale.forEach(Element => {
    Element.addEventListener('mouseover',()=> {
        grayscale.classList.remove('img-grayscaled')
    })
});

// Navbar Menu Icon //
let menu = document.querySelector('#menu-box');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('menu-box')
    navbar.classList.toggle('open')
}

// Scroll Reveal //
// const sr = ScrollReveal (
//     {
//         distance: '40px',
//         duration: 2050,
//         delay: 200,
//         reset: true
//     }
// );

// sr.reveal('.home-text',{origin: 'top'});
// sr.reveal('.home-image img',{origin: 'top'});
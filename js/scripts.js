const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();

// document.addEventListener("DOMContentLoaded", function() {
//     var resultado = prompt("Ingrese su nombre:");
//     if (resultado !== null) {
//         alert("¡Hola, " + resultado + "!");
//     }
//     });
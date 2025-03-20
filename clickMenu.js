//Menu smartphone/tablet
var btn = document.getElementById('btn'),
    caja = document.getElementById('caja'),
    contador = 0;

function cambio() {
    if(contador == 0) {
        caja.classList.add('verBarra');
        contador = 1;
    } else {
        caja.classList.remove('verBarra');
        contador = 0;
    }
}
btn.addEventListener('click', cambio, true)


//Preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
    preloader.style.display = "none";
})



//Contact popup message
const closeMessage = document.querySelector('.closex', );
const closeMessagex = document.querySelector('.contact-btn');
const message = document.querySelector('.contact-message');

closeMessage.addEventListener('click', () => {
    message.style.display = "none";
});
closeMessagex.addEventListener('click', () => {
    message.style.display = "none";
});

//Submit sent form confirmation

const submitbtn = document.getElementById('submitbth');
const confirmationAlert = document.getElementById('form-confirm');

submitbtn.addEventListener('click', () => {
    confirmationAlert.style.display = "block";
})



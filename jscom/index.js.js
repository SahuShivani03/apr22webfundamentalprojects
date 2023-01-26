const bar = document.getElementById('bar');
const close = document.getElementById('close');

const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


function jcom() {
    var x = document.getElementById("navbar");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

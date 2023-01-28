const bar = document.getElementById('bar');
const close = document.getElementById('close');

const nav = document.getElementById('div');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


function insta() {
    var x = document.getElementById("div");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myreel(){
    document.getElementById("image1").src = "https://media.tenor.com/VT6FD07iaBgAAAAC/instagram-mycrxn.gif";
}
function mysecreel(){
    document.getElementById("image2").src = "https://i.pinimg.com/originals/0b/eb/4b/0beb4b7b5b70be576778c280270aafb4.gif";
}
function mythirdreel(){
    document.getElementById("image3").src = "https://funtechz.com/wp-content/uploads/2020/01/How-to-Post-GIFs-on-Instagram.gif";
}
function myfourthreel(){
    document.getElementById("image4").src = "https://cdn.dribbble.com/users/2584869/screenshots/6083349/bike_dribble.gif";
}


























































































































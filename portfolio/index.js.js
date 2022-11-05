 const bar = document.getElementById('bar');
const close = document.getElementById('close');

const nav = document.getElementById('navbar');

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


function jcom() {
    var x = document.getElementById("navbar");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function addToCart(){
    var item = document.getElementById("list");
   var selectedItem = document.getElementById("selectedItem");
   var li = document.createElement("li");
   li.setAttribute('id',selectedItem.value);
   li.appendChild(document.createTextNode(selectedItem.value));
   item.appendChild(li);
}
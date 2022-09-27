console.log("welcome to music hub");
let songIndex = 0;
let audioElement = new Audio('music\EV - Hamdard.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

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





var button = document.getElementById("button");
var audio = document.getElementById("player");

let songs = [
    { songName: "salam-e-Ishq", filePath: " Baby(PagalWorld).mp3", coverPath: "https://c.saavncdn.com/898/Let-Me-Love-You-English-2016-500x500.jpg" },
    { songName: "let me love you", filePath: "\EV - Hamdard.mp3 ", coverPath: "https://www.pagalworld.us/_big/ek-villain-2014-250.jpg" },
    { songName: "bhula dena", filePath: "music\media.mp3.mp3 ", coverPath: "https://www.pagalworld.us/_big/aashiqui-2-2013-250.jpg" },
    { songName: "humdard", filePath: "music\media.mp3.mp3", coverPath: "https://www.pagalworld.us/_big/ek-villain-2014-250.jpg" },
    { songName: "salam-e-Ishq", filePath: "music\Never Say Never - Justin Bieber- [PagalWorld.NL].mp3 ", coverPath: "https://pagalworld.nl/siteuploads/thumb/sft25/12373_resize2x_220x220.webp" },
    { songName: "salam-e-Ishq", filePath: "music\TS - Main Woh Chaand.mp3 ", coverPath: "https://www.pagalworld.us/_big/teraa-surroor-2016-250.jpg" },
    { songName: "salam-e-Ishq", filePath: "music\Tum Hi Aana(PagalWorld.com.se).mp3", coverPath: "https://www.pagalworld.pw/GpE34Kg9Gq/113434/143221-tum-hi-aana-marjaavaan-mp3-song-300.jpg" },
    { songName: "salam-e-Ishq", filePath: "music\Tum-Mere-Ho(PagalWorld).mp3 ", coverPath: "https://pagaliworld.com/siteuploads/thumb/sft4/1517_4.jpg" },
]
songItems.forEach((element, i) => {

    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})


audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //  console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');


    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays()
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

    })
})


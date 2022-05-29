console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/10.mp3", coverPath: "covers/10.jpg" }
]
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
    }
})
// Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
})
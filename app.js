let video = document.querySelector('#video');
let btnPausePlay = document.querySelector('#play-pause')
let btnPlay = document.querySelector('.fa-circle-play');
let btnPause = document.querySelector('.fa-circle-pause');
let barreOrange = document.querySelector('.barre-orange');
let jus         = document.querySelector('.jus-orange');
let volumeVideo = document.querySelector('#volume');
let muet        = document.querySelector('#muet');
let pleinEcran  = document.querySelector('#plein-ecran');
let jusPos;
video.addEventListener('click',togglePlay);
btnPausePlay.addEventListener('click',togglePlay);

btnPause.style.display = 'none';

function togglePlay(){
    if (video.paused) {
        btnPause.style.display = 'block';
        btnPlay.style.display = 'none';
        video.play();
    }
    else{
        btnPause.style.display = 'none';
        btnPlay.style.display = 'block';
        video.pause(); 
    }
}

video.addEventListener('timeupdate',()=>{
    jusPos = video.currentTime / video.duration;

    jus.style.width = jusPos *100 + '%';
    if (video.ended) {
        btnPause.style.display = 'none';
        btnPlay.style.display = 'block'; 
    }
});

volumeVideo.addEventListener('change',()=>{
    video.volume = volumeVideo.value/100;
});

muet.addEventListener('click',()=>{
    if (video.muted) {
        video.muted = false;
        muet.textContent ='Muet';
    }
    else{
        video.muted = true;
        muet.textContent ='volume';
    }
});

let rect = barreOrange.getBoundingClientRect();
let largeur = rect.width;

barreOrange.addEventListener('click',(e)=>{
    let x = e.clientX - rect.left;

    let widthPercent = ((x*100/largeur));
    // console.log(widthPercent);
    let durationVideo = video.duration;

    video.currentTime = durationVideo * (widthPercent/100);
    
});
window.addEventListener('resize',()=>{
    let rect = barreOrange.getBoundingClientRect();
    let largeur = rect.width;
});

video.addEventListener('dblclick',()=>{
    video.requestFullscreen();
});

pleinEcran.addEventListener('click',()=>{
    video.requestFullscreen();
});




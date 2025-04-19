const audio = document.getElementById('bg-music');

if (sessionStorage.getItem('audioPlaying') === 'true') {
    audio.play();
}

document.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        sessionStorage.setItem('audioPlaying', 'true');  
    }
});

// Ensure audio stops when leaving the page
window.addEventListener('beforeunload', function () {
    sessionStorage.removeItem('audioPlaying');  
});

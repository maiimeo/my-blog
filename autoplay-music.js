document.addEventListener('click', function () {
    const audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.play();
    }
});

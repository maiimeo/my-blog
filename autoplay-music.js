document.addEventListener('click', function () {
    const audio = document.getElementById('bg-music');

    // Check if the audio is paused and then play it
    if (audio.paused) {
        audio.play();
    }
});

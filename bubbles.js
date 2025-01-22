const container = document.getElementById('bubbles-container');

// Generate 30 bubbles
for (let i = 0; i < 30; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Random size for the bubble
    const size = Math.random() * 80 + 20; // Between 20px and 100px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random initial position
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;

    // Increase animation duration to make bubbles move slowly
    bubble.style.animationDuration = `${Math.random() * 10 + 15}s`; // Between 15s and 25s
    bubble.style.animationDelay = `${Math.random() * 5}s`;

    // Add the bubble to the container
    container.appendChild(bubble);
}

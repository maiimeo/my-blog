// Generate 30 bubbles
for (let i = 0; i < 30; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.width = `${Math.random() * 100 + 50}px`; // Random size
    bubble.style.height = bubble.style.width; // Keep it circular
    bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position
    bubble.style.animationDuration = `${Math.random() * 3 + 3}s`; // Float duration
    bubble.style.animationDelay = `${Math.random() * 5}s`; // Delay
    bubble.style.background = `rgba(255, 255, 255, 0.6)`; // Transparent white
    container.appendChild(bubble); // Add to container
}

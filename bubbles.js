const container = document.getElementById('bubbles-container');

// Generate 30 bubbles
for (let i = 0; i < 30; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random size for each bubble
    const size = Math.random() * 80 + 20; // Between 20px and 100px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random starting position
    bubble.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    bubble.style.top = `${Math.random() * 100}vh`; // Random vertical position

    // Randomize animation duration and delay
    const duration = Math.random() * 20 + 10; // Between 10s and 30s
    const delay = Math.random() * 5; // Between 0s and 5s
    bubble.style.animation = `float ${duration}s ${delay}s infinite`;

    container.appendChild(bubble);
}

// Add keyframes for the bubble movement
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
        }
        50% {
            transform: translateY(-50vh) translateX(-20vw);
            opacity: 0.9;
        }
        100% {
            transform: translateY(-100vh) translateX(20vw);
            opacity: 0;
        }
    }
`, styleSheet.cssRules.length);

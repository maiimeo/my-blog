const container = document.getElementById('bubbles-container');

// Generate 30 bubbles
for (let i = 0; i < 30; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random size for the bubble
    const size = Math.random() * 80 + 20; // Between 20px and 100px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random starting position
    const startX = Math.random() * 100; // Start position (% of viewport width)
    const endX = Math.random() * 100; // End position (% of viewport width)
    const startY = 100; // Always start from the bottom of the page
    const endY = -10; // Move offscreen at the top

    // Randomize animation duration and delay
    const duration = Math.random() * 10 + 15; // Between 15s and 25s
    const delay = Math.random() * 5; // Between 0s and 5s

    // Define the keyframes dynamically for this bubble
    bubble.style.animation = `float ${duration}s ${delay}s infinite`;
    bubble.style.left = `${startX}vw`;

    // Add custom keyframes for this bubble
    const styleSheet = document.styleSheets[0];
    const keyframes = `
        @keyframes float {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0.6;
            }
            50% {
                transform: translateY(${endY}vh) translateX(${endX - startX}vw);
                opacity: 0.9;
            }
            100% {
                transform: translateY(${2 * endY}vh) translateX(${2 * (endX - startX)}vw);
                opacity: 0;
            }
        }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    // Add the bubble to the container
    container.appendChild(bubble);
}

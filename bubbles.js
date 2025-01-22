//// Create bubbles
const container = document.getElementById('bubbles-container');
const totalBubbles = 30;

for (let i = 0; i < totalBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.width = `${Math.random() * 100 + 50}px`; // Random size between 50px and 150px
    bubble.style.height = bubble.style.width; // Maintain circular shape
    bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position
    bubble.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random animation duration between 3s and 6s
    bubble.style.animationDelay = `${Math.random() * 5}s`; // Random delay
    container.appendChild(bubble);
}
 You can add JavaScript here for interactivity like a search bar, comments, etc.
console.log('Blog JavaScript is loaded!');

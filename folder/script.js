// Create particles
const numParticles = 100;
const container = document.getElementById('animation-container');

for (let i = 0; i < numParticles; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.backgroundColor = getRandomColor();
  dot.style.left = `${Math.random() * 100}vw`;
  dot.style.top = `${Math.random() * 100}vh`;
  container.appendChild(dot);
}

// Anime.js animation
anime({
  targets: '.dot',
  translateX: () => anime.random(-500, 500),
  translateY: () => anime.random(-500, 500),
  scale: () => anime.random(1, 5),
  easing: 'easeInOutQuad',
  duration: () => anime.random(1000, 3000),
  loop: true,
  direction: 'alternate'
});

// Helper function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

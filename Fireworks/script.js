const svg = document.getElementById('fireworks');

// Function to create a firework
function createFirework(x, y) {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', 5);
  circle.setAttribute('fill', getRandomColor());
  svg.appendChild(circle);
  
  anime({
    targets: circle,
    r: [
      { value: 0, duration: 0 },
      { value: 50, duration: 1000, easing: 'easeOutQuart' }
    ],
    opacity: [
      { value: 1, duration: 0 },
      { value: 0, duration: 1000 }
    ],
    complete: () => svg.removeChild(circle)
  });
}

// Function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add event listener to trigger fireworks
document.addEventListener('click', function(event) {
  createFirework(event.clientX, event.clientY);
});

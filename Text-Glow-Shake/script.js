// Break the text into individual characters
const textElement = document.getElementById('text');
textElement.innerHTML = textElement.textContent.split("").map(char => `<span class='character'>${char}</span>`).join("");

const characters = document.querySelectorAll('.character');

// Handle hover effects on the text
let shakeAnimations = [];

textElement.addEventListener('mouseover', function() {
  // Apply color and less bright glow to each character
  characters.forEach((char, index) => {
    const color = `hsl(${360 * index / characters.length}, 100%, 50%)`;
    char.style.color = color;
    char.style.textShadow = `0 0 5px ${color}`;
  });

  // Apply Glitch Effect
  shakeAnimations = Array.from(characters).map(char => {
    return anime({
      targets: char,
      translateX: () => anime.random(-3, 3),
      translateY: () => anime.random(-3, 3),
      duration: 100,
      loop: true,
      direction: 'alternate'
    });
  });
});

textElement.addEventListener('mouseout', function() {
  // Reset to white and remove glow
  characters.forEach(char => {
    char.style.color = 'white';
    char.style.textShadow = '0 0 5px rgba(255, 255, 255, 0.5)';
  });

  // Stop all shake animations
  shakeAnimations.forEach(animation => animation.pause());
});

// Create snowfall
const container = document.getElementById('container');
const numberOfDots = 100;

for (let i = 0; i < numberOfDots; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = `${Math.random() * 100}vw`;
  dot.style.top = `${Math.random() * -100}vh`;
  container.appendChild(dot);

  anime({
    targets: dot,
    translateY: [
      { value: '100vh', duration: 10000, easing: 'linear' }
    ],
    loop: true,
    delay: anime.random(0, 3000)
  });
}

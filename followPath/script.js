// Initialize canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Resize canvas to fill browser window dynamically
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Generate 100 circles with random initial positions and colors
const circles = Array.from({ length: 100 }, () => {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  };
});

// Function to draw circles
function drawCircles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  circles.forEach(circle => {
    ctx.fillStyle = circle.color;
    ctx.shadowColor = circle.color;
    ctx.shadowBlur = 2;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, 20, 0, Math.PI * 2);  // Radius increased to 20 pixels for better visibility
    ctx.closePath();
    ctx.fill();
  });
}

// Initial draw call to make sure circles appear without any user action
drawCircles();

// Anime.js to animate the circles in an infinity pattern
anime({
  targets: circles,
  x: {
    value: function() { return anime.random(0, canvas.width); },
    duration: 2000,
    easing: 'linear'
  },
  y: {
    value: function() { return anime.random(0, canvas.height); },
    duration: 2000,
    easing: 'linear'
  },
  loop: true,
  update: drawCircles,
  changeComplete: function() {
    circles.forEach(circle => {
      circle.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    });
  }
});

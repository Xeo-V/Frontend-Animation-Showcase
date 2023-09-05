const textElement = document.getElementById('text');
const originalText = 'Technology';
let currentText = originalText + '_';
textElement.textContent = currentText;

function getRandomChar(isUpperCase) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-+=<>?/[]{}|';
  let pool = isUpperCase ? chars.slice(26, 52) : chars;
  return pool[Math.floor(Math.random() * pool.length)];
}

async function animateText() {
  for (let i = originalText.length - 1; i >= 0; i--) {
    const isUpperCase = originalText[i] === originalText[i].toUpperCase();
    
    // Animate the character for 2 seconds
    for (let j = 0; j < 20; j++) {
      currentText = currentText.slice(0, i) + getRandomChar(isUpperCase) + '_';
      textElement.textContent = currentText;
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Remove the character and move the underscore
    currentText = currentText.slice(0, i) + '_';
    textElement.textContent = currentText;
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Re-emerge characters
  for (let i = 0; i < originalText.length; i++) {
    const isUpperCase = originalText[i] === originalText[i].toUpperCase();
    
    // Animate the character for 2 seconds
    for (let j = 0; j < 20; j++) {
      currentText = currentText.slice(0, i) + getRandomChar(isUpperCase) + '_';
      textElement.textContent = currentText;
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Set the character back to original and move the underscore
    currentText = currentText.slice(0, i) + originalText[i] + '_';
    textElement.textContent = currentText;
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Remove the trailing underscore
  textElement.textContent = originalText;
}

// Start the animation
animateText();

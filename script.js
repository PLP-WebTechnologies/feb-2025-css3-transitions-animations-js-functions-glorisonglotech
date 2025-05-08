// Retrieve saved preference from localStorage
const messageElement = document.getElementById('message');
const savedPreference = localStorage.getItem('preference');
if (savedPreference) {
  messageElement.textContent = `Your preference: ${savedPreference}`;
}

// Add event listener to the button
document.getElementById('animate-btn').addEventListener('click', () => {
  // Save preference to localStorage
  const preference = 'Button Clicked!';
  localStorage.setItem('preference', preference);

  // Update message
  messageElement.textContent = `Your preference: ${preference}`;

  // Trigger animation
  const button = document.getElementById('animate-btn');
  button.style.animation = 'bounce 0.5s ease infinite';
  button.addEventListener('animationend', () => {
    button.style.animation = ''; // Reset animation
  });
});

// Define bounce animation in JavaScript
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`, styleSheet.cssRules.length);
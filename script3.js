document.addEventListener('DOMContentLoaded', function() {
  
    const colorButtons = document.querySelectorAll('.color-btn');
  
    colorButtons.forEach(button => {
      button.addEventListener('click', () => {
        const color = button.textContent.toLowerCase();
        document.body.style.backgroundColor = color;
      });
    });
  
  
    const resetButton = document.getElementById('btnReset');
    resetButton.addEventListener('click', () => {
      document.body.style.backgroundColor = 'white';
    });
  });
  
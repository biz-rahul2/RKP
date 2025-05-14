// Add hover effect for buttons
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.main-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
      const arrows = button.querySelectorAll('.arrow-button');
      arrows.forEach(arrow => {
        arrow.classList.add('animated-arrow');
      });
    });
    
    button.addEventListener('mouseleave', () => {
      const arrows = button.querySelectorAll('.arrow-button');
      arrows.forEach(arrow => {
        arrow.classList.remove('animated-arrow');
      });
    });
  });
});

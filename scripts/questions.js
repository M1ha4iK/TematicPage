document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.button');
    let hints = document.querySelectorAll('.hint');

    buttons.forEach(function(button, index) {
      const myImg = button.querySelector('img');
      let hint = hints[index];
  
      button.addEventListener('click', function(event) {
        hint.classList.toggle('show');
      });
    
    });
});


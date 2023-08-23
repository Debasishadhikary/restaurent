document.addEventListener('DOMContentLoaded', function() {
     // Get all the menu cards
     const menuCards = document.querySelectorAll('.menu-card');
   
     // Add a class to each menu card to start the animation
     menuCards.forEach((card, index) => {
       card.style.animationDelay = `${index * 0.1}s`; // Delay each card's animation
       card.classList.add('animate');
     });
   });
   
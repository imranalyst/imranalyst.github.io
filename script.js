const cards = document.querySelectorAll('.card');

function revealCards(){
  cards.forEach(card=>{
    const pos = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(pos < screenHeight - 50){
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

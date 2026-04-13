export default {
  init() {
console.log('khgkhdfghdk')
const programPage = document.querySelector('.program-page');
if (!programPage) return;
	
      const cards = document.querySelectorAll('.program-card');
    
      if (!cards.length) return;
    
      cards.forEach((card) => {
        const button = card.querySelector('.program-card__button');
    
        if (!button) return;
    
        button.addEventListener('click', () => {
          const isOpen = card.classList.contains('is-open');
    
          cards.forEach((item) => {
            item.classList.remove('is-open');
    
            const itemButton = item.querySelector('.program-card__button');
            if (itemButton) {
              itemButton.setAttribute('aria-expanded', 'false');
            }
          });
    
          if (!isOpen) {
            card.classList.add('is-open');
            button.setAttribute('aria-expanded', 'true');
          }
        });
      });

  }

}
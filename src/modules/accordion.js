export default {
  init() {
    const base = document.querySelector(".programm-base");
   /*  console.log(base) */
    const items = base.querySelectorAll(".accordion button");

    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');


      
      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }
      
      if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }
    
    items.forEach(item => item.addEventListener('click', toggleAccordion));
  },

  faqAccordionInit() {
    const faq = document.querySelector('.faq');
    if (!faq) return;
  
    const items = faq.querySelectorAll('.accordion button');
  
    function toggleAccordion() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
  
      // закрываем все
      items.forEach(item => {
        item.setAttribute('aria-expanded', 'false');
      });
  
      // открываем текущий, если он был закрыт
      if (!isExpanded) {
        this.setAttribute('aria-expanded', 'true');
      }
    }
  
    items.forEach(item => {
      item.addEventListener('click', toggleAccordion);
    });
  }
  

 /*  init2() {
    
    const pro = document.querySelector(".programm-pro");
    const items = pro.querySelectorAll(".accordion button");

    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');


      
      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }
      
      if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }
    
    items.forEach(item => item.addEventListener('click', toggleAccordion));
  } */


}
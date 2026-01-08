export default {
  init() {
    const base = document.querySelector(".programm-base");
    console.log(base)
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

  init2() {
    
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
  }

}
export default {
  init() {
    const items = document.querySelectorAll(".accordion button");

    console.log('items', items)

    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');

      console.log('itemToggle', itemToggle)
      
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
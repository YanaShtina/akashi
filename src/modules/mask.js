import IMask from 'imask';

export default {
  init() {
    const masks = document.querySelectorAll('.js-tel');
    if (!masks) return;

    let complited = false;

    const maskOptions = {
      mask: '+{7} (000) 000-00-00',
      lazy: false,
      placeholderChar: '_' 
    };


   masks.forEach((m) => {
        const mask = IMask(m, maskOptions);

        m.addEventListener('blur', () => {

          if (mask.masked.isComplete === false && mask.masked.rawInputValue.length > 0) {
            m.closest(".input-wrap").classList.add('error');
            complited = false
          } else if (mask.masked.isComplete === true && mask.masked.rawInputValue.length >= 0) {
            m.closest(".input-wrap").classList.remove('error');
            complited = true
          } else if (mask.masked.isComplete === false && mask.masked.rawInputValue.length === 0) {
            m.closest(".input-wrap").classList.remove('error');
            complited = false
          }
        }) 
    }) 
  }
}
export default {
  init() {
    const showBtn = document.querySelector('.about__txt-btn');
    const showBtcontent = document.querySelector('.about__txt-hiden');
   

    if(!showBtn) return;

    showBtn.addEventListener('click', () => {
      showBtn.classList.toggle('active');
      showBtcontent.classList.toggle('active');
    })
  }
}
export default {
  init() {
    const formMain = document.querySelector('#form__main');

    if(!formMain) return;

    const TOKEN = '6595993359:AAH6IIhXxG75Hht09D8huHAf5Z1EmEBPlk8';
    const CHAT_ID = '-1001815654992';
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    
    

    formMain.addEventListener('submit', function(e) {
      e.preventDefault();

      let msg = `<b>Сообщение с сайта</b>\n`;
      msg +=`<b>Отправитель: </b> ${this.name.value}\n`
      msg +=`<b>Телефон: </b> ${this.tel.value}\n`
      msg +=`<b>Ссылка на соц сети: </b> ${this.link.value}\n`
      msg +=`<b>Текст сообщения: </b> ${this.txt.value}\n`

  /*     console.log('msg', msg); */


      axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: msg,
      })
      .then((res) => {
        this.name.value = '';
        this.tel.value = '';
        this.link.value = '';
        this.txt.value = '';
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        console.log('end')
      })
    })
  }
}
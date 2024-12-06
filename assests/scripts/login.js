const input = document.querySelector('input');
const button = document.querySelector('button');

const form = document.querySelector('form');



const validateInput = ({ target }) => {
    if (target.value.length > 3) {
      button.removeAttribute('disabled');
      return;
    }
  
    button.setAttribute('disabled', '');
  }


const handleSubmit  = (event) => {
  event.preventDefault();
  
  localStorage.setItem('player', input.value);
  window.location = ' assests/pages/game.html';


}
  input.addEventListener('input', validateInput);
  form.addEventListener('submit', handleSubmit);



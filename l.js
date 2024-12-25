const input = document.querySelector('input');
const button = document.querySelector('button');

const validateInput = ({ target }) => {
    if (target.value.length > 3) {
      button.removeAttribute('disabled');
      return;
    }
  
    button.setAttribute('disabled', '');
  }

  input.addEventListener('input', validateInput);

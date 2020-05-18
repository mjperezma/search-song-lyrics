import {API} from './api.js';
import * as UI from './interfaz.js';

UI.shearchForm.addEventListener('submit', (ev) => {
  ev.preventDefault();

  // obtener datos del formulario
  const artist = document.querySelector('#artist').value;
  const song = document.querySelector('#song').value;

  if (artist === '' || song === '') {
    //   mensaje que debe aparecer si el usuario deja los campos vacíos
    UI.divMessage.innerHTML = 'Error, todos los campos son obligatorios';
    UI.divMessage.classList.add('error');
    setTimeout(() => {
      UI.divMessage.innerHTML = 'Error, todos los campos son obligatorios';
      UI.divMessage.classList.remove('error');
    }, 3000);
  } else {
    // realizamos la consulta a la API
    const api = new API(artist, song);
    api.consultApi().then((data) => {
      if (data.answer.lyrics) {
        //   la letra de la cancion existe
        const letter = data.answer.lyrics;
        UI.divResult.textContent = letter;
      } else {
        //   la letra de la cancion no existe
        UI.divMessage.innerHTML = 'La canción no existe  😩 , ¡prueba con otra!';
        UI.divMessage.classList.add('error');
        setTimeout(() => {
          UI.divMessage.innerHTML = '';
          UI.divMessage.classList.remove('error');
          UI.shearchForm.reset();
        }, 3000);
      }
    });
  }
});

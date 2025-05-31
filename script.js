// Carica il suono
const clickSound = new Audio('click.mp3');

// Creazione dinamica degli elementi
const container = document.createElement('div');

const counterDisplay = document.createElement('div');
counterDisplay.id = 'counter';
let counterValue = 0;
counterDisplay.textContent = counterValue;

const incrementButton = document.createElement('button');
incrementButton.textContent = '+';

const decrementButton = document.createElement('button');
decrementButton.textContent = '−';

// Aggiunta degli elementi alla pagina
container.appendChild(counterDisplay);
container.appendChild(incrementButton);
container.appendChild(decrementButton);
document.body.appendChild(container);

// Eventi dei pulsanti
incrementButton.addEventListener('click', () => {
  counterValue++;
  counterDisplay.textContent = counterValue;
  clickSound.play(); // suono!
});

decrementButton.addEventListener('click', () => {
  counterValue--;
  counterDisplay.textContent = counterValue;
  clickSound.play(); // suono!
});

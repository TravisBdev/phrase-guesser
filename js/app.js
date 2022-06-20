/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let screenKeys = document.querySelector('#qwerty');
let keys = document.querySelectorAll('.key');
let startButton = document.querySelector('#btn_reset');

let game = '';

startButton.addEventListener('click', () => {
  game = new Game();
  game.startGame();
})

screenKeys.onclick = (e) => {
  let target = e.target;
  if(target.className === 'key'){
    game.handleInteraction(target);
  }
}

document.addEventListener('keydown', (e) => {
  for(let i = 0; i < keys.length; i++){
    if(e.key === keys[i].innerHTML && keys[i].disabled === false) {
      game.handleInteraction(keys[i]);
    }
  }
})



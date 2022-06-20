// Author: Travis Brown
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.querySelector('#overlay');
const lives = document.querySelectorAll('.tries');


class Game {
  constructor(){
    this.missed = 0;
    this.phrases = [
      new Phrase('Few word do trick'),
      new Phrase('Look closer it is worth it'),
      new Phrase('Kevin spilled the chili'),
      new Phrase('Life is what you make it'),
      new Phrase('It happens')
    ];
    this.activePhrase = null;
  }

  getRandomPhrase(){
    let randomPhrase = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[randomPhrase].phrase;
  }



  startGame(){
   ul.innerHTML = '';
   for(let i = 0; i < keys.length; i++){
    keys[i].className = 'key';
    keys[i].disabled = false;
   }
   for(let i = 0; i < lives.length; i++){
    lives[i].firstChild.src = 'images/liveHeart.png'
   }
   this.missed = 0;
   overlay.style.display = 'none';
   this.activePhrase = new Phrase(this.getRandomPhrase());
   this.activePhrase.addPhraseToDisplay();
  }



  checkForWin(){
    let checkForLetters = 0;
    for(let i = 0; i < ul.children.length; i++){
      if(ul.children[i].className.includes('hide')){
        checkForLetters++;
      }
    }
    if(checkForLetters === 0){
      return true;
    }
  }



  removeLife(){
    this.missed += 1;
    let numOfLives = lives.length - this.missed;
    if(this.missed < 5){
      lives[numOfLives].firstChild.src = 'images/lostHeart.png';
    }else {
      this.gameOver(false);
    }
  }



  gameOver(gameWon){
    let message = document.querySelector('#game-over-message');
     if(gameWon){
       overlay.style.disply = 'initial';
       overlay.className = 'win';
       message.innerHTML = 'Yay! You did it! Congrats!';
     }else{
       overlay.style.display = 'initial';
       overlay.className = 'lose';
       message.innerHTML = 'Sorry. Better luck next time';
     }
     
   }



  handleInteraction(button){
    button.disabled = true;
    if(this.activePhrase.phrase.includes(button.innerHTML)){
      button.className += 'chosen';
      this.activePhrase.showMatchedLetter(button.innerHTML);
    
    if (this.checkForWin()) {
      this.gameOver(true);
    };
  }else{
    button.className += 'wrong';
    this.removeLife();
  }
 }




  resetGame(){
    ul.innerHTML = '';
    keys.forEach(button => {
      button.classList.remove('wrong');
      button.classList.remove('chosen');
      button.disabled = false;
    })
    lives.forEach(life => {
      life.src = 'images/liveHeart.png'
    })
  }



}
// Author: Travis Brown

class Game {
    constructor(missed,phrases,activePhrase){
    this.missed = 0,
    this.phrases = [ 
        new Phrase("Kevin spilled the chili"),
        new Phrase("Trust me I am lying"),
        new Phrase("To infinity and beyond"),
        new Phrase("Few word do trick"),
        new Phrase("Anxiety at the disco")

    ]
    this.activePhrase = null
    }

// starts a new instance of the game
  startGame(){
        const overlay = document.querySelector("#overlay");
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
       this.activePhrase.addPhraseToDisplay();
    }

// selects a phrase randomly from the list
    getRandomPhrase(){
        const randomNum = Math.floor(Math.random() * (this.phrases.length))
        return this.phrases[randomNum]
    }

    
//Controls game logic. Checks to see if the selection matches a letter in the phrase
    handleInteraction(selection){

          selection.setAttribute("disabled",'');
          if(this.activePhrase.phrase.includes(selection.textContent)){
              selection.className = 'chosen';
              this.activePhrase.showMatchedLetter(selection.textContent);
              this.checkForWin();
              if (this.checkForWin() === true){
                  this.gameOver();
              }
          }
          else {
              selection.className = 'wrong';
              this.removeLife();
        }

// removes a heart icon whenever an incorrect guess is made
      }
    removeLife() {
        let lives = document.querySelectorAll("img");
        if(this.missed < 4){
        lives[this.missed].src = "images/lostHeart.png"
        this.missed += 1;
        }
        else {
            this.gameOver();
        }
    }
// checks for equality between the phrase and guess
    checkForWin() {
        const phrase = this.activePhrase.phrase.replace(/ /g,"").length;
        const guess = document.querySelectorAll('.letter.show').length;
        if (phrase === guess){
            return true
        }
        else{
            return false
        }
    }
//displays appropriate overlay depending on the outcome of the game
    gameOver() {
        const overlay = document.querySelector("#overlay");
        overlay.style.display = '';

        if (this.missed === 4 && this.checkForWin() === false) {
            let text = document.querySelector("h1");
            text.textContent = "Sorry! Please Try Again.";
            text.className = "lose-message";
            overlay.className = 'lose';           
        }
        else {
            overlay.className = 'win';
            let text = document.querySelector("h1");
            text.className = "win-message";
            text.textContent = "Yay! You did it! Congrats";

        }
    }
}
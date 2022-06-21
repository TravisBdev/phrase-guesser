// Author: Travis Brown

const list = document.querySelector("ul");

class Phrase {
    constructor (phrase) {
    this.phrase = phrase.toLowerCase();
    }
//Adds letter placeholders when a new game is started
    addPhraseToDisplay() {
        list.innerHTML = '';
       const letters =  this.phrase.split('');
       letters.forEach((letter) => {
           if (letter === ' '){
            list.innerHTML += '<li class="space"> </li>'
            
           }
           else {
            list.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`
           }
       });
    }

// checks if the letter selected is included in the phrase
    checkLetter(selection){
            if (this.phrase.includes(selection)){
                return true
            }
                return false
        }
// Shows the letter selected if it matches a letter in thl
    showMatchedLetter(selection){
        const letter = list.children
        for (let i = 0; i < letter.length; i++)
        if (selection === letter[i].innerText) {
            letter[i].className = `show letter ${selection}"`;
            }   
        }

}   
// Author: Travis Brown
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const phraseList = document.querySelector('#phrase');
const ul = phraseList.querySelector('ul');


class Phrase {
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay(){
    ul.innerHTML = ''
    let letters = this.phrase.split('');
    letters.forEach((letter) => {
      if(letter === ' '){
        ul.innerHTML += `<li class="space"> </li>`;
      }else {
        ul.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
      }
    })
  }

  checkLetter(letter){
    if (this.phrase.includes(letter)){
      this.showMatchedLetter(letter);
      return true;
    }
  }

  showMatchedLetter(letter){
    let matchedLetters = ul.children;
    for(let i = 0; i < matchedLetters.length; i++){
      if(letter === matchedLetters[i].textContent){
       matchedLetters[i].className = `show letter ${letter}`;
      }
    }
  }

}


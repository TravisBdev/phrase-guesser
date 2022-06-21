// Author: Travis Brown

const game = new Game();

// Creates a new instance of the game when the start button is clicked
const startButton = document.querySelector("#btn__reset");

startButton.addEventListener("click", event => {
    let ul = document.querySelector("ul");
   let current = ul.children;
   for (let i = 0; i < current.length; i++){
    ul.removeChild(current[i]);
   }
   let toggleClass = document.querySelectorAll(".chosen, .wrong");
   for (let i = 0; i < toggleClass.length; i++){
       toggleClass[i].removeAttribute("disabled");
        toggleClass[i].className = "key";
    }
    let lives = document.querySelectorAll("img");
    for (let i = 0; i < lives.length; i++){
        lives[i].src = "images/liveHeart.png"
    }
    game.missed = 0;
   
    game.startGame();
});
//Enables use of the onscreen keyboard
    const screenKeys = document.getElementById("qwerty");
    screenKeys.addEventListener("click", e => {
    if (e.target.className === 'key'){
        game.handleInteraction(e.target);
        console.log(e.target);
    }
});
//Matches the keyboard with the key button
    const keys = document.querySelectorAll(".key");
    document.addEventListener("keydown", e => {
    keys.forEach(letter => {
     if (e.key === letter.textContent && letter.className ==='key'){
        game.handleInteraction(letter);
    }
})

});
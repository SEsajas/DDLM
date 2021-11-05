// localStorage.clear();

let answer = false
let answers = getSaved();

if(!answers){
    answers = [];
}
var programming_languages = [

    "dead",
   
    "mexico",
   
    "calavera",
   
    "coco",
   
    "skeleton",
   
    "ghosts",
   
    "remember",
   
   ]
   
   let answer1 = '';
   
   let maxWrong = 6;
   
   let mistakes = 0;
   
   let guessed = [];
   
   let wordStatus = null;

   let oldWord = '';
   
   function randomWord() {
   
     while(answer1 === oldWord){
      answer1 = programming_languages[Math.floor(Math.random() * 7)];
     }
     oldWord = answer1;
   }
   
   function generateButtons() {
   
     let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
   
       `
   
         <button
   
           class="btn btn-lg btn-primary m-2"
   
           id='` + letter + `'
   
           onClick="handleGuess('` + letter + `')"
   
         >
   
           ` + letter + `
   
         </button>
   
       `).join('');
   
     document.getElementById('keyboard').innerHTML = buttonsHTML;
   
   }
   
   function handleGuess(chosenLetter) {
   
     guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
   
     document.getElementById(chosenLetter).setAttribute('disabled', true);
   
     if (answer1.indexOf(chosenLetter) >= 0) {
   
       guessedWord();
   
       checkIfGameWon();
   
     } else if (answer1.indexOf(chosenLetter) === -1) {
   
       mistakes++;
   
       updateMistakes();
   
       checkIfGameLost();
   
       updateHangmanPicture();
   
     }
   
   }
   
   function updateHangmanPicture() {
   
     document.getElementById('hangmanPic').src = '/pictures/hangman/' + mistakes + '.png';
   
   }
   
   function checkIfGameWon() {
   
     if (wordStatus === answer1) {
   
       document.getElementById('keyboard').innerHTML = 'You Won!!!';
       document.querySelector('button').classList.toggle('hidden');
       answer1 = true;
       answers[2] = answer1;
       save();
       exit();
     }
   
   }
   
   function checkIfGameLost() {
   
     if (mistakes === maxWrong) {
   
       document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer1;
   
       document.getElementById('keyboard').innerHTML = 'You Lost!!!';
   
     }
   
   }
   
   function guessedWord() {
   
     wordStatus = answer1.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
   
     document.getElementById('wordSpotlight').innerHTML = wordStatus;
   
   }
   
   function updateMistakes() {
   
     document.getElementById('mistakes').innerHTML = mistakes;
   
   }
   
   function reset() {
   
     mistakes = 0;
   
     guessed = [];
   
     document.getElementById('hangmanPic').src = '/pictures/hangman/0.png';
   
     randomWord();
   
     guessedWord();
   
     updateMistakes();
   
     generateButtons();
   
   }

   document.getElementById('maxWrong').innerHTML = maxWrong;
   
   randomWord();
   
   generateButtons();
   
   guessedWord();

   // save answers in the localstorage
function save(){
  const a = JSON.stringify(answers);
  localStorage.setItem("answers", a);
}

// get the answers refill the array
function getSaved(){
  return JSON.parse(localStorage.getItem("answers"));
}


// exit the room
function exit(){
  if(answers.length == 3){
  if (answers.includes(false) || answers.includes(null) || answer.includes("null")){

  }else{
      location.href = './exit.html';
  }
}
}

// Timer
const time = document.querySelector(".time");
let countDown = localStorage.getItem("time") || localStorage.setItem("time", 600);
let countDownTimer;
setTimeout(stopGame, countDown * 1000);
countDownTimer = setInterval(updateCountDown, 1000);
time.textContent = countDown;

function stopGame(){
  alert("Your time is up")
      clearInterval(countDownTimer);
      countDown = 10;
      location.href = './lose.html';
  }

function updateCountDown(){
  countDown --;
  localStorage.setItem("time", countDown)
  console.log(countDown);
  time.textContent = countDown;
}

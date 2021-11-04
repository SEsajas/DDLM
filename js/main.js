 localStorage.clear();
let answer = false;
let answers = getSaved();


if(!answers){
    answers = [];
}
// Go to page game 1
const mem_game = document.querySelector(".game1")
if (mem_game) 
{
 mem_game.addEventListener("click", ()=>{
    location.href = './memory.html';
 });   
}
// Go to page game 2
const maze_game = document.querySelector(".game2")
if (maze_game) 
{
 maze_game.addEventListener("click", ()=>{
    location.href = './maze.html';
 });   
}
// Go to page game 3
const hang_game = document.querySelector(".game3")
if (hang_game) 
{
 hang_game.addEventListener("click", ()=>{
    location.href = './hangman.html';
 });   
}

const time = document.querySelector(".time");
const overlay = document.querySelector(".overlay");
let countDown = 1200;
let countDownTimer;
countDownTimer = setInterval(updateCountDown, 1000);

function startGame(){
    overlay.classList.toggle("hidden");
    setTimeout(stopGame, countDown * 1000);
    countDownTimer = setInterval(updateCountDown, 1000);
}

// Game Over

function stopGame(){
    alert("Your time is up");
        clearInterval(spawnTimer);
        overlay.classList.toggle("hidden");
        clearInterval(countDownTimer);
        countDown = 10;
        location.href = './lose.html';
    }


function updateCountDown(){
    countDown --;
    console.log(countDown);
    time.textContent = countDown;
}


// To clean local storage to replay the game
let buttonReplay = document.querySelectorAll(".replay");

if (buttonReplay) {

    buttonReplay.addEventListener("click",()=>{
        localStorage.clear();
    })
};




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
    if (answers.includes(false) || answers.includes(null)){
        console.log(`You haven't solved all puzzles`)
    }else{
        location.href = './exit.html';
    }
}
}
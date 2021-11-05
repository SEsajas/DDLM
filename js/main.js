//localStorage.clear();


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

// Timer


const time = document.querySelector(".time");
let countDown = localStorage.getItem("time") || localStorage.setItem("time", 600);
let countDownTimer;
setTimeout(stopGame, countDown * 1000);
countDownTimer = setInterval(updateCountDown, 1000);
time.textContent = countDown;



// Game Over

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


// To clean local storage to replay the game

let buttonReplay = document.querySelectorAll(".replay");

if (buttonReplay) {
    console.log(buttonReplay);

    buttonReplay.forEach(element => {
        element.addEventListener("click",()=>{
            localStorage.removeItem(`answers`);
            localStorage.removeItem(`name`);
            localStorage.removeItem(`characher`);
        });
    }); 
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
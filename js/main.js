// localStorage.clear();
let answer = false
let answers = getSaved();

if(!answers){
    answers = [];
}

let countDown = 20;
let countDownTimer;
function updateCountDown(){
    countDown --;
    console.log(countDown);
    time.textContent = countDown;
}
function stopGame(){
    alert(`To bad you ran out of time.`)
        location.href = './exit.html';
    clearInterval(spawnTimer);
    overlay.classList.toggle("hidden");
    clearInterval(countDownTimer);
    countDown = 10;
    let player = new Player(prompt("What is your name?"),score);
    score = 0
    highScoreList.push(player);
    printHighScore();
    localStorage.highScoreList = JSON.stringify(highScoreList);
    }



let answer = false
let answers = getSaved();

// To clean local storage to replay the game

// const buttonReplay = document.querySelectorAll(".replay")
// if(buttonReplay)
// {
//     buttonReplay.addEventlistner("click",()=>{
//         localStorage.clear();
//     })
// }

// Exit game / Won

function exit(){
    if(answers.length == 3){
    if (answers.includes(false) || answers.includes(null)){
        console.log(`You haven't solved all puzzles`)
    }else{
        location.href = './exit.html';
        alert(`Congrats you made it!`)
    }
}
}

// Game over
function gameOver(){
    if( time == NULL){
        
    }
}

// save answers in the localstorage
function save(){
    const a = JSON.stringify(answers);
    localStorage.setItem("answers", a);
}

// get the answers refill the array
function getSaved(){
    return JSON.parse(localStorage.getItem("answers"));
}


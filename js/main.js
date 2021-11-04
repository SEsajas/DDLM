// localStorage.clear();
let answer = false;
let answers = getSaved();

if(!answers){
    answers = [];
}

// const time = document.querySelector(".time");
// let countDown = 1200;
// let countDownTimer;
// countDownTimer = setInterval(updateCountDown, 1000);
// if (countDown == 0) {
//     alert("Your time is up");
// }
//     clearInterval(spawnTimer);
// function updateCountDown(){
//     countDown --;
//     console.log(countDown);
//     time.textContent = countDown;
// }


// To clean local storage to replay the game
let buttonReplay = document.querySelectorAll(".replay");

buttonReplay.forEach(element => {
    if(buttonReplay)
{
    buttonReplay.addEventListener("click",()=>{
        localStorage.clear();
    })
}  
});




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
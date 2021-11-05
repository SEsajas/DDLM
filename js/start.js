function StartTimer() {
    localStorage.setItem("time", 600);
}

const startButton = document.querySelector(".startTimer");



if (startButton) {
    startButton.addEventListener("click", ()=>{
        StartTimer();
        location.href = './index.html';

    })
}

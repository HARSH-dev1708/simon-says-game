let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;
let endLevel = 10;
let btns = ["yellow", "red", "green", "blue"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function () {
        btn.classList.remove("user-flash");
    }, 300);
}

function gameWin(){
    h2.innerHTML = "Congratulations! You surpassed all the levels.&#x1F389; <br> Press any key to Play again"
    document.querySelector("body").style.background="green";

    setTimeout(function(){
        document.querySelector("body").style.background="radial-gradient(#ffcb94, #74d5ff)";
    }, 100);
    reset();
}


function levelUp(){
    userSeq = []
    level++;
    if(level > endLevel){
        gameWin();
        return;
    }
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]){
        if(gameSeq.length === userSeq.length){
            setTimeout(levelUp, 1000);
        }

    } else {
        h2.innerHTML=`GameOver! Your score was <b>${level}</b> <br>Press any key to start again.`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="radial-gradient(#ffcb94, #74d5ff)";
        }, 200);
        reset();
    }
}

function btnPress(){
    // console.log(this.classList);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns =  document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
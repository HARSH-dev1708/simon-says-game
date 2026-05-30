let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;

document.addEventListener("keypress", function () {
    if(started == false){
        console.log("Game started");
        started = true;
    }
});
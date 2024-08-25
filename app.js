let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let score = 0;
let highestScore = localStorage.getItem("highestScore") || 0;
let h2 = document.querySelector("h2");
let highestScoreDisplay = document.createElement("div");
highestScoreDisplay.textContent = `Highest Score: ${highestScore}`;
document.body.appendChild(highestScoreDisplay);

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    if (!btn) {
        console.error("Button is undefined.");
        return;
    }
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    if (!btn) {
        console.error("Button is undefined.");
        return;
    }
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    score++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            if (level > highestScore) {
                highestScore = level;
                localStorage.setItem("highestScore", highestScore);
                highestScoreDisplay.textContent = `Highest Score: ${highestScore}`;
            }
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over!! Your Score was <b>${score}</b><br> Press Any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 400)
        reset();
    }
}

function btnpress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (let btn of allbtn) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    score = 0;
}







// let gameSeq = [];
// let userSeq = [];
// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;
// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function() {
//     if (!started) {
//         console.log("Game is started");
//         started = true;
//         levelUp();
//     }
// });

// function gameFlash(btn) {
//     if (!btn) {
//         console.error("Button is undefined.");
//         return;
//     }
//     btn.classList.add("flash");
//     setTimeout(function() {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function userFlash(btn) {
//     if (!btn) {
//         console.error("Button is undefined.");
//         return;
//     }
//     btn.classList.add("userflash");
//     setTimeout(function() {
//         btn.classList.remove("userflash");
//     }, 250);
// }

// function levelUp() {
//     userSeq=[];
//     level++;
//     h2.innerText = `Level ${level}`;
//     let randIdx = Math.floor(Math.random() * btns.length);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns(idx)
// {
//     if(userSeq[idx]== gameSeq[idx])
//         {
//             if(userSeq.length == gameSeq.length)
//                 {
//                     setTimeout(levelUp,1000);
//                 }
//         }else{
//             h2.innerHTML=`Game Over!! Your Score was <b>${level}</b><br> Press Any key to enter`;
//             document.querySelector("body").style.backgroundColor = "red";
//             setTimeout(function(){
//             document.querySelector("body").style.backgroundColor = "white";
//             }, 400)
//             reset();
//         }
// }

// function btnpress()
// {
//     let btn = this;
//     userFlash(btn);
//     let  userColor= btn.getAttribute("id");
//     userSeq.push(userColor);
//     checkAns(userSeq.length-1);
// }
// let allbtn= document.querySelectorAll(".btn");
// for(btn of allbtn)
//     {
//         btn.addEventListener("click",btnpress);
//     }
//  function reset()
//  {
//     started=false;
//     gameSeq=[];
//     userSeq =[];
//     level =0;
//  }



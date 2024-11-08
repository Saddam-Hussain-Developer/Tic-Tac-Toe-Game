let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.style.color = "red";
            box.innerText = "O";
            turnO = false;
        } else {
            box.style.color = "green";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner ();
        if (count === 9 && !isWinner) {
            drawGame();
        }
    });
});

const drawGame = () => {
    msg.innerText = "Draw Game";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    };
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let patterns of winPatterns) {
    let posVal1 = boxes[patterns[0]].innerText;
    let posVal2 = boxes[patterns[1]].innerText;
    let posVal3 = boxes[patterns[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
        if (posVal1 === posVal2 && posVal2 === posVal3) {
            showWinner(posVal1);
        };
    };
    };
};

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
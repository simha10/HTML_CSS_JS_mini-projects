document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelectorAll(".box");
    let resetBtn = document.querySelector("#resetbtn");
    let newGameBtn = document.querySelector("#newbtn");
    let msgContainer = document.querySelector(".win-msg");
    let newMsg = document.querySelector(".msg");

    let turnO = true;
    let moveCount = 0; // Move counter

    const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            moveCount++; // Increment move counter
            checkWinner();
        });
    });

    const resetGame = () => {
        turnO = true;
        moveCount = 0; // Reset move counter
        enableBoxes();
        msgContainer.classList.add("hide");
    };

    const disableBoxes = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    };

    const enableBoxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    };

    const showWinner = (winner) => {
        newMsg.innerText = `Game Over! Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    };

    const showDraw = () => { // match draw function
        newMsg.innerText = "Match Draw! No winner for this match.";
        msgContainer.classList.remove("hide");
        disableBoxes();
    };

    const checkWinner = () => {//checks the winner from winning patterns
        for (let pattern of winPatterns) {
            let posval1 = boxes[pattern[0]].innerText;
            let posval2 = boxes[pattern[1]].innerText;
            let posval3 = boxes[pattern[2]].innerText;

            if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
                if (posval1 === posval2 && posval2 === posval3) {
                    console.log("winner", posval1);
                    showWinner(posval1);
                    return;
                }
            }
        }
        if (moveCount === 9) { // Check for draw
            showDraw();
        }
    };

    newGameBtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);
});

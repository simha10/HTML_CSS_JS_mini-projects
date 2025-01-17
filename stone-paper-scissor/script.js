let userscore = 0;
let compscore = 0;

let p = document.getElementsByClassName("msg")[0];
let userScoreElement = document.getElementById("user-score");
let compScoreElement = document.getElementById("comp-score");
let resetbutton = document.querySelector("button");

const choice = document.querySelectorAll(".choice");

resetbutton.addEventListener("click",()=>{
    const resetResult = reset();
    userscore = resetResult.userscore;
    compscore = resetResult.compscore;
    result = resetResult.result
    userScoreElement.innerHTML = userscore;
    compScoreElement.innerHTML = compscore;
    p.innerHTML=result;
});

const reset = () => {
    return {
        userscore: 0,
        compscore: 0,
        result:"Lets Restart"
    };
}

const comchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const number = Math.floor(Math.random() * 3);
    return options[number];
};

const playGame = (userchoice, computerChoice) => {
    if (userchoice === computerChoice) {
        return "It's a tie";
    } else {
        if (userchoice === "rock") {
            if (computerChoice === "scissors") {
                userscore++;
                return "Rock smashes scissors, you win!";
            } else if (computerChoice === "paper") {
                compscore++;
                return "Paper covers rock, you lose!";
            }
        } else if (userchoice === "paper") {
            if (computerChoice === "rock") {
                userscore++;
                return "Paper covers rock, you win!";
            } else if (computerChoice === "scissors") {
                compscore++;
                return "Scissors cuts paper, you lose!";
            }
        } else if (userchoice === "scissors") {
            if (computerChoice === "paper") {
                userscore++;
                return "Scissors cuts paper, you win!";
            } else if (computerChoice === "rock") {
                compscore++;
                return "Rock smashes scissors, you lose!";
            }
        }
    }
};

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        const computerChoice = comchoice(); // Generate computer choice only once
        const result = playGame(userchoice, computerChoice);
        p.innerHTML = `Your choice is ${userchoice}, and computer choice is ${computerChoice}. Result: ${result}`;
        userScoreElement.innerHTML = userscore;
        compScoreElement.innerHTML = compscore;
    });
});

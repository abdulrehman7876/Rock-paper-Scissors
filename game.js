let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");;

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const getCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random() * 3);
    return option[randInd];
};

const drawGame = ()=> {
    console.log("Game is draw.");
    msg.innerText = "Game is draw";
    msg.style.backgroundColor = "#5C6784"; 
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("You lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = getCompChoice();
    console.log("Comp Choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor"? false : true;
        } else {
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
} 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
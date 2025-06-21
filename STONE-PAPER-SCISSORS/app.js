let userScore = 0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const us = document.querySelector("#user-score");
const cs = document.querySelector("#comp-score");

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        message.innerText = `You Win, ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
        userScore++;
        us.innerText = userScore;

    }
    else{
        message.innerText = `You Lose, ${compChoice} beats ${userChoice}`;
        message.style.backgroundColor = "red";
        compScore++;
        cs.innerText = compScore;
    }
}
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const playGame = (userChoice)=>{
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        console.log("Game Was Draw");
        message.innerText = "Game Draw!!"
        message.style.backgroundColor = rgb(30, 1, 82);;
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ?false:true;
        }
        else if(userChoice == "paper"){
            userWin = compChoice === "scissors" ? false:true;
        }
        else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked " + userChoice);
        playGame(userChoice);
    });
});

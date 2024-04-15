let image = document.querySelectorAll(".image");
let youScore = document.querySelector("#youScore");
let compScore = document.querySelector("#compScore");
let drawScore = document.querySelector("#drawScore");
let msg = document.querySelector("#msg");

let userWinCount = 0;
let compWinCount = 0;
let drawCount = 0;

const compChoice = () =>{
    let options = ["stone","paper","scissor"];
    let compNum = Math.floor(Math.random() * 3);
    return options[compNum];
}

const drawGame = () => {
    drawCount++;
    console.log("Game Draw");
    msg.innerText = "Game Draw (Try Again)";
    drawScore.innerText = drawCount;
    msg.style.backgroundColor = "purple";
}

const showWinner = (userWin,option,userChoice) =>{
    if(userWin === true){
        userWinCount++;
        console.log(" User Winner");
        msg.innerText = `You Win! Your ${userChoice.toUpperCase()} beats ${option.toUpperCase()}`;
        youScore.innerText = userWinCount;
        msg.style.backgroundColor = "green";
        
    }
    else{
        compWinCount++;
        console.log("Comp Winner");
        msg.innerText = `You Lose! ${option.toUpperCase()} beats your ${userChoice.toUpperCase()}`;
        msg.style.backgroundColor = "red";
        compScore.innerText = compWinCount;
    }
}

const playGame = (userChoice) =>{
    console.log("User Clicked = ",userChoice);
    //generating computer choice
    let option = compChoice();
    console.log(option);
    if(option === userChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = option === "scissor" ? true : false;
        }
        else if(userChoice === "paper"){
            userWin = option === "stone" ? true : false;
        }
        else{
            userWin = option === "paper" ? true : false;
        }
        showWinner(userWin,option,userChoice);
    }
}

image.forEach((choice) => {
    let userChoice = choice.getAttribute("id");
    choice.addEventListener("click",(evnt)=>{
        playGame(userChoice);
    })
})
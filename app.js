let userscore = 0;
let compscore = 0;

const msg = document.querySelector("#msg")
const userscorepara =document.querySelector("#user-score");
const compscorepara =document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    // rock,paper,scissor\
    const option = ["rock" , "paper", "scissor"];
    const randIx = Math.floor(Math.random() * 3);
    return option[randIx];

};

const drowGmae = () =>{
    console.log("Game was drow");
    msg.innerText = "Game was drow.  play again";
    msg.style.backgroundColor = "purple"
};

const playGame = (userchoice) =>{
    console.log("user choice" , userchoice);
    // generate computer choice
    const compchoice = genCompChoice();
    console.log("comp choice =" , compchoice);

    if(userchoice === compchoice){
        // draw
        drowGmae();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            // paper,scissor
           userwin = compchoice === "paper" ? false  : true ;
        }else if(userchoice === "paper"){
          userwin =  compchoice === "scissor" ? false : true ;
        }else {
            // rock, paper
            userwin = compchoice === "rock"? false : true;
        }
        showWinner(userwin);
    }
};

const showWinner = (userwin , compchoice , userchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Win! your ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red"
    }
}
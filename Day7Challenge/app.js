//Determine 3 outcomes for each choice
  //Rock: Paper covers rock (lose), Rock smashes scissors (win), Rock and Rock (draw)
  //Paper: Paper covers rock (win), Scissors cuts paper (lose), Paper and Paper (draw)
  //Scissors: Scissors cuts paper(win), Rock smashes scissors (lose), Scissors and Scissors (draw)
//Generate a random number for the computer 
//

let choice = ["rock", "paper", "scissors"]


let playerChoice = choice

const startText = document.querySelector(".animate");
const str = startText.textContent;
const splitText = str.split("");
startText.textContent = "";

for(let i=0; i < splitText.length; i++){
  startText.innerHTML += "<span>" + splitText[i] + "</span>";
}

let letter = 0;
let timer = setInterval(onClock, 90);

function onClock(){
  const span = startText.querySelectorAll('span')[letter];
  span.classList.add('fade');
  letter++
  if(letter === splitText.length){
    complete();
    return;
    
  }
}


function complete(){
  clearInterval(timer);
  timer = null;
}


function play(playerChoice){
  let capture = compChoice()
  console.log(playerChoice, capture)
  if(playerChoice == "rock" && capture == "scissors"){
    document.getElementById('rock')
    window.alert("Rock smashes Scissors! You won!");
    }else if(playerChoice == "rock" && capture == "paper"){
    document.getElementById('rock')
    window.alert("Paper covers Rock! You lose!");
  }else if(playerChoice == "rock" && capture == "rock"){
    document.getElementById('rock')
    window.alert("Rock and Rock! Draw!");
  }else if(playerChoice == "paper" && capture == "rock"){
    document.getElementById('paper')
    window.alert("Paper covers Rock! You won!");
  }else if(playerChoice == "paper" && capture == "scissors"){
    document.getElementById('paper')
    window.alert("Scissors cuts Paper! You lose!");
  }else if(playerChoice == "paper" && capture == "paper"){
    document.getElementById('paper')
    window.alert("Paper and Paper! Draw!");
  }else if(playerChoice == "scissors" && capture == "paper"){
    document.getElementById('scissors')
    window.alert("Scissors cuts Paper! You won!");
  }else if(playerChoice == "scissors" && capture == "rock"){
    document.getElementById('scissors')
    window.alert("Rock smashes Scissors! You lose!");
  }else if(playerChoice == "scissors" && capture == "scissors"){
    document.getElementById('scissors')
    window.alert("Scissors and Scissors! Draw!");
  }
}

function compChoice(){
  let index = Math.floor(Math.random() * choice.length)
  let cChoice = choice[index]
  return cChoice
}

compChoice()


let playerScore = 0;
let comScore = 0;
const popUp = document.getElementById("gameover");
const gameMessage = document.getElementById("message");
const gameStats = document.getElementById("gamestats");
const newGame = document.getElementById("newgame");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choices = ['rock', 'paper', 'scissors'];

function gameLogic(){

	rock.addEventListener("click", function(){
		for(let i = 0; i <= choices.length; i++){
			if(computerPlay() === choices[0]){
				gameMessage.innerHTML = "Draw!";
			break;
			} else if (computerPlay() === choices[1]){
				gameMessage.innerHTML = 'You lose! Paper beats Rock!';
				comScore++;
				break;
			} else if (computerPlay() === choices[2]){
				gameMessage.innerHTML = 'You win! Rock beats Scissors!';
				playerScore++;
				break;
			}
		}
		if (playerScore === 5 || comScore === 5) {
			rock.style.display = "none";
			paper.style.display = "none";
			scissors.style.display = "none";
			popUp.style.display = "block";
			gameMessage.style.display = "none";
		 	gamestats.innerHTML = "Player's Score: " + playerScore + " Computer's Score: " + comScore;
		}
	});

	paper.addEventListener("click", function(){
		for(let i = 0; i <= choices.length; i++){
			if(computerPlay() === choices[0]){
				gameMessage.innerHTML = 'You win! Paper beats Rock!';
				playerScore++;
				break;
			} else if (computerPlay() === choices[1]){
				gameMessage.innerHTML = 'Draw!';
				break;
			} else if (computerPlay() === choices[2]){
				gameMessage.innerHTML = 'You lose! Scissors beat Paper!';
				comScore++;
				break;
			}
		}
		if (playerScore === 5 || comScore === 5) {
			rock.style.display = "none";
			paper.style.display = "none";
			scissors.style.display = "none";
			popUp.style.display = "block";
			gameMessage.style.display = "none";
		 	gamestats.innerHTML = "Player's Score: " + playerScore + " Computer's Score: " + comScore;
		}
	});

	scissors.addEventListener("click", function(){
		for(let i = 0; i <= choices.length; i++){
			if(computerPlay() === choices[0]){
				gameMessage.innerHTML = 'You lose! Rock beats Scissors!';
				comScore++;
				break;
			} else if (computerPlay() === choices[1]){
				gameMessage.innerHTML = 'You win! Scissors beats Paper!';
				playerScore++;
				break;
			} else if (computerPlay() === choices[2]){
				gameMessage.innerHTML = 'Draw!';
				break;
			}
		}
		if (playerScore === 5 || comScore === 5) {
			rock.style.display = "none";
			paper.style.display = "none";
			scissors.style.display = "none";
		 	popUp.style.display = "block";
		 	gameMessage.style.display = "none";
		 	gamestats.innerHTML = "Player's Score: " + playerScore + " Computer's Score: " + comScore;
		}
	});

	newGame.addEventListener("click", function(){
		rock.style.display = "inline";
		paper.style.display = "inline";
		scissors.style.display = "inline";
		popUp.style.display = "none";
		gameMessage.innerHTML = "- Choose between Rock, Paper, or Scissors -";
		gameMessage.style.display = "block";
		playerScore = 0;
		comScore = 0;
	});

}



function computerPlay(){
	let randomChoice = Math.floor(Math.random() * choices.length);
	return choices[randomChoice];
}

gameLogic();



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

// Function that makes the computer to make a random choice
function computerPlay(){
	let randomChoice = Math.floor(Math.random() * choices.length);
	return choices[randomChoice];
}

// Functions that adds an animation to the game over pop-up message
const fadeInAnimation = () => {
	popUp.classList.add('messagefadein');
	popUp.style.zIndex = 1;
}

const fadeOutAnimation = () => {
	popUp.classList.add('messagefadeout');
}

function gameLogic(){

	// for for choosing rock (compares rock to computer's random choice)
	rock.addEventListener("click", function(){
		popUp.classList.remove('messagefadeout');
		popUp.style.display = 'none';
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
			fadeInAnimation();
			rock.style.display = "none";
			paper.style.display = "none";
			scissors.style.display = "none";
			popUp.style.display = "block";
			gameMessage.style.display = "none";
		 	gamestats.innerHTML = "Player's Score: " + playerScore + " Computer's Score: " + comScore;
		}
	});

	// logic for choosing paper
	paper.addEventListener("click", function(){
		popUp.classList.remove('messagefadeout');
		popUp.style.display = 'none';
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
			fadeInAnimation();
			rock.style.display = "none";
			paper.style.display = "none";
			scissors.style.display = "none";
			popUp.style.display = "block";
			gameMessage.style.display = "none";
		 	gamestats.innerHTML = "Player's Score: " + playerScore + " Computer's Score: " + comScore;
		}
	});

	// logic for choosing scissors
	scissors.addEventListener("click", function(){
		popUp.classList.remove('messagefadeout');
		popUp.style.display = 'none';
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
			fadeInAnimation();
			rock.style.display = "none";
			paper.style.display = "none";
			scissors.style.display = "none";
		 	popUp.style.display = "block";
		 	gameMessage.style.display = "none";
		 	gamestats.innerHTML = "Player's Score: " + playerScore + " Computer's Score: " + comScore;
		}
	});

	// Creates a new game with both player scores at 0
	newGame.addEventListener("click", function(){
		popUp.classList.remove('messagefadein');
		popUp.classList.add('messagefadeout');
		rock.style.display = "inline";
		paper.style.display = "inline";
		scissors.style.display = "inline";
		popUp.style.zIndex = "0";
		gameMessage.innerHTML = "- Choose between Rock, Paper, or Scissors -";
		gameMessage.style.display = "block";
		playerScore = 0;
		comScore = 0;
	});

}

gameLogic();



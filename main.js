// Global Variables
var game;

// QuerySelectors
var rulesSection = document.querySelector('.rules-section')
var classicRulesButton = document.querySelector('.classic-rules')
var spicyRulesButton = document.querySelector('.spicy-rules')
var chooseGame = document.querySelector('.choose-game')
var chooseFighter = document.querySelector('.choose-fighter')
var displayResults = document.querySelector('.display-results')
var classicCharacters = document.querySelector('.characters-classic')
var spicyCharacters = document.querySelector('.characters-spicy')
var icon = document.querySelector('.icon')
var changeGameButton = document.querySelector('.change-game-button')
var computerFighter = document.querySelector('.computer-fighter')
var humanFighter = document.querySelector('.human-fighter')
var result = document.querySelector('.result')
var computerWins = document.querySelector('.computer-wins')
var humanWins = document.querySelector('.human-wins')
var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var flower = document.getElementById('flower')
var mushroom = document.getElementById('mushroom')

// EventListeners
classicRulesButton.addEventListener("click", playClassicGame);
spicyRulesButton.addEventListener("click", playSpicyGame);
changeGameButton.addEventListener("click", returnHome);
classicCharacters.addEventListener("click", playGame);
spicyCharacters.addEventListener("click", playGame);
rock.addEventListener('click', viewPlayerChoice)
paper.addEventListener('click', viewPlayerChoice)
scissors.addEventListener('click', viewPlayerChoice)
flower.addEventListener('click', viewPlayerChoice)
mushroom.addEventListener('click', viewPlayerChoice)

//Functions


// On page load you should see Rock, Paper, Scissors Title; Human title and Human icon, Computer title and Computer icon; Choose Your Game!
//Beaneath Choose Your Game you should see a clickable box for Classic Game and Spicy Game.
// After User selects Classic Game a Change Game button should appear; Choose Your Game should change to Choose Your Fighter; and clickable images of a rock, paper and scissors should be seen // If Spicy Game is chosen then the same rock, paper, scissors PLUS images of a mushroom and a flower.
// Once a fighter is chosen, code will run to determine a winner at random; the winning fighter will display; and whoever won will be awarded 1 point.
// At that point the page will default back to the current game selected, either classic or spicy and the User can continue to play that game or click the Change Game Button and select the other game.

// If Classic Game is selected show classicCharacters
function selectGame(event) {
  if (event.target.id === charactersClassic) {
    viewElement(classicCharacters)
  } else if (event.target.id === charactersSpicy) {
    viewElement(spicyCharacters)
    viewElement(classicCharacters)
  }
  hideElement(rulesSection)
  hideElement(chooseGame)
  viewElement(chooseFighter)
  viewElement(changeGameButton)
}

function playGame(event) {
  // I think this is where a new instance of Game goes?
  game = new Game()
  // var id = event.target.id
  // console.log(game.humanFighter);
  game.human.selectHumanFighter()
  // had id in parends, once I took it out my setTimeout function started working. Still no image upon completion of game
  game.computer.selectComputerFighter()
  game.determineWinner();
}

function playClassicGame(event) {
  playGame(event)
  game.type = 'Classic';
  hideElement(displayResults);
  hideElement(result);
  viewElement(chooseFighter);
  hideElement(chooseGame);
  hideElement(rulesSection);
  viewElement(classicCharacters);
  viewElement(changeGameButton);
  game.showCharacters();
}

function playSpicyGame(event) {
  playGame(event)
  game.type = 'Spicy';
  hideElement(displayResults);
  hideElement(result);
  viewElement(chooseFighter);
  hideElement(chooseGame);
  hideElement(rulesSection);
  viewElement(classicCharacters);
  viewElement(spicyCharacters);
  viewElement(changeGameButton);
  game.showCharacters();
}

function viewPlayerChoice(humanFighter, computerFighter) {
  hideElement(chooseFighter);
  viewElement(displayResults);
  hideElement(classicCharacters);
  hideElement(spicyCharacters);
  if (game.winner === 'Human') {
    displayResults.innerHTML =
    `<img class="player-image" src="./assests/player_image.png" width="125" height="125"/>`
  } else {
    displayResults.innerHTML =
    `<img class="player-image" src="./assests/computer_icon.png" width="125" height="125"/>`
  }
  // displayWinner.innerHTML = "";
  // displayWinner.innerHTML += `
  // <section class="pick humanFighter" id="humanFighter">
  //     <img id=${humanFighter} src='./assests/${humanFighter}.png'>
  //   </section>
  //   <section class="pick computerFighter" id="computerFighter">
  //     <img id=${computerFighter} src='./assests/${computerFighter}.png'>
  //   </section>
  // `;

  // what I want to do here is show either the person image or the computer image, whomever wins + HUMANS WINS!!! or COMPUTER WINS!!!
  viewElement(result)
  displayWinner()
  returnToGame()
}

function displayWinner() {
  if (game.winner === 'Human') {
    game.human.wins += 1;
    result.innerText = 'HUMAN WINS!!!';
    humanWins.innerHTML = 'wins: ' + game.human.wins;
  } else if (game.winner === 'Computer') {
    game.computer.wins +=1 ;
    result.innerText = 'COMPUTER WINS!!!';
  } else {
    game.winner = 'tie';
    result.innerText = 'TIE GAME!';
  }
  hideElement(classicCharacters);
  hideElement(spicyCharacters);
  // viewElement(displayResults);
  returnToGame()
}

function returnToGame() {
  if (game.type === 'Classic') {
    setTimeout(playClassicGame, 10000);
  } else {
    setTimeout(playSpicyGame, 10000);
  }
}

function returnHome() {
  event.preventDefault;
  hideElement(changeGameButton);
  hideElement(classicCharacters);
  hideElement(spicyCharacters);
  hideElement(chooseFighter);
  hideElement(result);
  viewElement(chooseGame);
  viewElement(rulesSection);
}

function viewElement(element) {
  element.classList.remove("hidden");
}

function hideElement(element) {
  element.classList.add("hidden");
}

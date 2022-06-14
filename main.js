// Global Variables
var game = new Game()

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
classicRulesButton.addEventListener("click", showClassicCharacters);
spicyRulesButton.addEventListener("click", showSpicyCharacters);
changeGameButton.addEventListener("click", returnHome);
classicCharacters.addEventListener("click", function(event){
  playGame(event.target.id)
});
spicyCharacters.addEventListener("click", function(event){
  playGame(event.target.id)
});

//Functions
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

function playGame(fighter) {
  game.human.selectHumanFighter(fighter)
  game.computer.updateComputerChoices()
  game.determineWinner();
  displayWinnerImage()
}

function showClassicCharacters() {
  game.gameType = 'Classic';
  hideElement(displayResults);
  hideElement(result);
  viewElement(chooseFighter);
  hideElement(chooseGame);
  hideElement(rulesSection);
  viewElement(classicCharacters);
  viewElement(changeGameButton);
  game.showCharacters();
}

function showSpicyCharacters() {
  game.gameType = 'Spicy';
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

function displayWinnerImage() {
  hideElement(chooseFighter);
  viewElement(displayResults);
  hideElement(classicCharacters);
  hideElement(spicyCharacters);
  if (game.winner === 'Human') {
    displayResults.innerHTML =
    `<img class="player-image" src="./assests/player_image.png" width="125" height="125"/>`
  } else if (game.winner === 'Computer'){
    displayResults.innerHTML =
    `<img class="player-image" src="./assests/computer_icon.png" width="125" height="125"/>`
  } else {
    displayResults.innerHTML = `<img class="tie-game" src="./assests/tie_icon.png" width="150" height="125"/>`
  }
  viewElement(result)
  displayWinner()
}

function displayWinner() {
  if (game.winner === 'Human') {
    result.innerText = 'HUMAN WINS!!!';
  } else if (game.winner === 'Computer') {    result.innerText = 'COMPUTER WINS!!!';
  } else {
    result.innerText = 'TIE GAME!';
  }
  humanWins.innerText = 'wins: ' + game.human.wins;
  computerWins.innerText = 'wins: ' + game.computer.wins;
  hideElement(classicCharacters);
  hideElement(spicyCharacters);
  returnToGame()
}

function returnToGame() {
  if (game.gameType === 'Classic') {
    setTimeout(showClassicCharacters
    , 2000);
  } else {
    setTimeout(showSpicyCharacters, 2000);
  }
}

function returnHome() {
  event.preventDefault();
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

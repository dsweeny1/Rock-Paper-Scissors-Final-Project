// Global Variables

var game = new Game(human, type);

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
var computerChoice = document.querySelector('.computer-choice')
var humanChoice = document.querySelector('.human-choice')
var result = document.querySelector('.result')
var computerWins = document.querySelector('.computer-wins')
var humanWins = document.querySelector('.human-wins')

// EventListeners
classicRulesButton.addEventListener("click", goToClassicGame);
spicyRulesButton.addEventListener("click", goToAdvancedGame);
changeGameButton.addEventListener("click", returnToHomePage);
classicCharacters.addEventListener("click", playGame);
spicyCharacters.addEventListener("click", playGame);

//Functions

// hideElement(chooseFighter);
// viewElement(displayResults);
// hideElement(classicCharacters);
// hideElement(spicyCharacters);


// On page load you should see Rock, Paper, Scissors Title; Human title and Human icon, Computer title and Computer icon; Choose Your Game!
//Beaneath Choose Your Game you should see a clickable box for Classic Game and Spicy Game.
// After User selects Classic Game a Change Game button should appear; Choose Your Game should change to Choose Your Fighter; and clickable images of a rock, paper and scissors should be seen // If Spicy Game is chosen then the same rock, paper, scissors PLUS images of a mushroom and a flower.
// Once a fighter is chosen, code will run to determine a winner at random; the winning fighter will display; and whoever won will be awarded 1 point.
// At that point the page will default back to the current game selected, either classic or spicy and the User can continue to play that game or click the Change Game Button and select the other game.

// If Classic Game is selected show classicCharacters
function selectGame() {
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

// this function is when the user selects rock, paper, scissors, mushroom, or flower.
//Once the user selects a fighter, Choose Your Figher needs to hide
function selectFighter() {
  if (event.target.id === 'rock') {
    game.human = 'rock';
  } else if (event.target.id === 'paper') {
    game.human = 'paper';
  } else if (event.target.id === 'scissors') {
    game.human = 'scissors';
  } else if (event.target.id === 'flower') {
    game.human = 'flower';
  } else if (event.target.id === 'mushroom') {
    game.human = 'mushroom';
  }
  // hideElement(chooseGame);
  // viewElement(changeGameButton);
  // hideElement(rulesSection)
}

function playGame() {
  game.human.takeTurn(event);
  game.getComputerChoice();
  game.updatePlayerChoices();
  game.determineWinner();
}

function playClassicGame() {
  game.type = 'Classic';
  hideElement(displayResults);
  hideElement(result);
  viewElement(chooseFighter);
  hideElement(chooseGame);
  hideElement(rulesSection);
  viewElement(classicCharacters);
  viewElement(changeGameButton);
  game.chooseCharacters();
}

function playSpicyGame() {
  game.type = 'Spicy';
  hideElement(displayResults);
  hideElement(result);
  viewElement(chooseFighter);
  hideElement(chooseGame);
  hideElement(rulesSection);
  viewElement(classicCharacters);
  viewElement(spicyCharacters);
  viewElement(changeGameButton);
  game.chooseCharacters();
}

function returnToGame() {
  if (game.type === 'Classic') {
    setTimeout(goToClassicGame, 2000);
  } else {
    setTimeout(goToSpicyGame, 2000);
  }
}

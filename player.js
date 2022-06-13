class Player {
  constructor(name, gameType) {
    this.name = name;
    this.wins = 0;
    this.gameType = gameType;
    this.characters = ["rock", "paper", "scissors"];
    this.spicyCharacters = ["rock", "paper", "scissors", "flower", "mushroom"]
    this.humanFighter = '';
    this.computerFighter = this.updateComputerChoices();
  }
   selectHumanFighter(id) {
    if (id === 'rock') {
      this.humanFighter = 'rock';
    } else if (id === 'paper') {
      this.humanFighter = 'paper';
    } else if (id === 'scissors') {
      this.humanFighter = 'scissors';
    } else if (id === 'flower') {
      this.humanFighter = 'flower';
    } else if (id === 'mushroom') {
      this.humanFighter = 'mushroom';
    }
  }
    selectComputerFighter() {
    var computerFighter = this.characters[Math.floor(Math.random() * this.characters.length)];
    return computerFighter
  }
    updateComputerChoices() {
    if (this.gameType === 'Classic') {
    return this.selectComputerFighter(this.characters)
    } else {
    return this.selectComputerFighter(this.spicyCharacters)
    }
  }
}

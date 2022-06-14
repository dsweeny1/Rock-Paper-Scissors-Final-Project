class Game {
  constructor(gameType) {
    this.gameType = gameType;
    this.characters = [];
    this.human = new Player("Human", gameType);
    this.computer = new Player("Computer", gameType);
    this.winner = '';
  }

  showCharacters() {
    if (this.gameType === "Classic") {
      this.characters = ["rock", "paper", "scissors"];
    } else if (this.gameType === "Spicy") {
      this.characters = ["rock", "paper", "scissors", "mushroom", "flower"];
    }
  }

  determineWinner() {
    if (this.human.humanFighter === this.computer.computerFighter) {
      this.winner = "tie";
    } else if (this.human.humanFighter === "rock" && this.computer.computerFighter === "scissors") {
      this.winner = 'Human';
      this.human.wins++
    } else if (this.human.humanFighter === "paper" && this.computer.computerFighter === "rock") {
      this.winner = 'Human';
      this.human.wins++
    } else if (this.human.humanFighter === "scissors" && this.computer.computerFighter === "paper") {
      this.winner = 'Human';
      this.human.wins++
    } else if (this.human.humanFighter === "rock" && this.computer.computerFighter === "mushroom") {
      this.winner = 'Human';
      this.human.wins++
    } else if (this.human.humanFighter === "paper" && this.computer.computerFighter === "flower") {
      this.winner = 'Human';
      this.human.wins++
    } else if (this.human.humanFighter === "scissors" && this.computer.computerFighter === "mushroom") {
      this.winner = 'Human';
      this.human.wins++
    } else if (this.human.humanFighter === "mushroom" && this.computer.computerFighter === "paper") {
      this.winner = 'Human';
      this.human.wins++
    } else if (this.human.humanFighter === "mushroom" && this.computer.computerFighter === "flower") {
      this.winner = 'Human';
      this.human.wins++
    } else if (this.human.humanFighter === "flower" && this.computer.computerFighter === "scissors") {
      this.winner = 'Human';
      this.human.wins++
    } else if (this.human.humanFighter === "flower" && this.computer.computerFighter === "rock") {
      this.winner = 'Human';
      this.human.wins++
    } else {
      this.winner = 'Computer';
      this.computer.wins++
    }
  }
}

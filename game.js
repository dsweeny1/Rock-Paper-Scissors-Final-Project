class Game {
  constructor(gameType) {
    this.type = gameType;
    this.characters = [];
    this.human = new Player("Human", gameType);
    this.computer = new Player("Computer", gameType);
    this.winner = '';
  }

  showCharacters() {
    if (this.type === "Classic") {
      this.characters = ["rock", "paper", "scissors"];
    } else if (this.type === "Spicy") {
      this.characters = ["rock", "paper", "scissors", "mushroom", "flower"];
    }
  }

  determineWinner() {
    if (this.human.humanFighter === this.computer.computerFighter) {
    this.winner = "tie";
    } else if (
    (this.human.humanFighter === "rock" && this.computer.computerFighter === "scissors") ||
    (this.human.humanFighter === "paper" && this.computer.computerFighter === "rock") ||
    (this.human.humanFighter === "scissors" &&
    this.computer.computerFighter === "paper") ||
    (this.human.humanFighter === "rock" && this.computer.computerFighter === "mushroom") ||
    (this.human.humanFighter === "paper" && this.computer.computerFighter === "flower") ||
    (this.human.humanFighter === "scissors" && this.computer.computerFighter === "mushroom") ||
    (this.human.humanFighter === "mushroom" && this.computer.computerFighter === "paper") ||
    (this.human.humanFighter === "mushroom" && this.computer.computerFighter === "flower") ||
    (this.human.humanFighter === "flower" && this.computer.computerFighter === "scissors") ||
    (this.human.humanFighter === "flower" && this.computer.computerFighter === "rock")
    ) {
    this.winner = "Human";
    } else {
    this.winner = "Computer";
    }
  }
}

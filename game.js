class Game {
  constructor(type, winner) {
    this.type = type;
    this.characters = [];
    this.human = new Player("Human");
    this.computer = new Player("Computer");
    this.humanChoice = humanChoice;
    this.computerChoice = computerChoice;
    this.winner = winner;
  }
  chooseCharacters() {
    if (this.type === "Classic") {
      this.characters = ["rock", "paper", "scissors"];
    } else if (this.type === "Advanced") {
      this.characters = ["rock", "paper", "scissors", "mushroom", "flower"];
    }
  }
  getComputerChoice() {
    this.computerChoice = this.characters[Math.floor(Math.random() * this.characters.length)];
  }
  updatePlayerChoices() {
    this.humanChoice = this.human.currentFighter;

    determineWinner() {
      if (this.humanChoice === this.computerChoice) {
        this.winner = "tie";
      } else if (
        (this.humanChoice === "rock" && this.computerChoice === "scissors") ||
        (this.humanChoice === "paper" && this.computerChoice === "rock") ||
        (this.humanChoice === "scissors" &&
          this.computerChoice === "paper") ||
        (this.humanChoice === "rock" && this.computerChoice === "mushroom") ||
        (this.humanChoice === "paper" && this.computerChoice === "flower") ||
        (this.humanChoice === "scissors" &&
          this.computerChoice === "mushroom") ||
        (this.humanChoice === "mushroom" && this.computerChoice === "paper") ||
        (this.humanChoice === "mushroom" &&
          this.computerChoice === "flower") ||
        (this.humanChoice === "flower" &&
          this.computerChoice === "scissors") ||
        (this.humanChoice === "flower" && this.computerChoice === "rock")
      ) {
        this.winner = "Human";
      } else {
        this.winner = "Computer";
      }
      viewChoices(this.humanChoice, this.computerChoice);
    }
}

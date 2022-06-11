class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.currentFighter;
    this.gameType = "Classic";
    this.characters = ["rock", "paper", "scissors"];
  }
  takeTurn(event) {
  this.currentFighter = event.target.id;
  }
}

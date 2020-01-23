//Game Rules:(The Pig Game)
//The game has two players, playing in rounds.
//Each player rolls the dice as much as he wishes and scores will add up in his
//round score.
//But if the player rolls 1, all his round score becomes 0, and comes the turn
//of second player.
//The first player to reach 100 on Global score wins the game.

var scores, roundScore, activePlayer, gamePlaying;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

function btn() {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDisplay = document.querySelector(".dice");
    diceDisplay.style.display = "block";
    diceDisplay.src = "dice" + dice + ".png";
    if (dice !== 1) {
      roundScore = roundScore + dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      roundScore = 0;
      document.getElementById("current-0").textContent = "0";
      document.getElementById("current-1").textContent = "0";
      document.querySelector(".player-0-panel").classList.toggle("active");
      document.querySelector(".player-1-panel").classList.toggle("active");
      document.querySelector(".dice").style.display = "none";
    }
  }
}
document.querySelector(".btn-roll").addEventListener("click", btn);

function btnHold() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!!!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      roundScore = 0;
      document.getElementById("current-0").textContent = "0";
      document.getElementById("current-1").textContent = "0";
      document.querySelector(".player-0-panel").classList.toggle("active");
      document.querySelector(".player-1-panel").classList.toggle("active");
      document.querySelector(".dice").style.display = "none";
    }
  }
}

document.querySelector(".btn-hold").addEventListener("click", btnHold);

function btnNewGame() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

document.querySelector(".btn-new").addEventListener("click", btnNewGame);

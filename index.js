//Game Rules:(The Pig Game)
//The game has two players, playing in rounds.
//Each player rolls the dice as much as he wishes and scores will add up in his
//round score.
//But if the player rolls 1, all his round score becomes 0, and comes the turn
//of second player.
//The first player to reach 100 on Global score wins the game.

var scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

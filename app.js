/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;
scores = [0, 0]; // Total Score of Player1 scores[0], and Player2 scores[1]
roundScore = 0; // Score in every time the dice roll
activePlayer = 0; //0 = Player1, 1 = Player2
dice = Math.floor(Math.random() * 6) + 1; //random number of the Dice
console.log(dice);

document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML ='<em>' + dice + '</em>';

var x = document.querySelector('#score-' + activePlayer).textContent;

document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click');

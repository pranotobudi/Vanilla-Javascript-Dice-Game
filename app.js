/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer, dice, winning_score;

init();

document
  .querySelector('.btn-new')
  .addEventListener('click', handleButtonNewClick);

document
  .querySelector('.btn-roll')
  .addEventListener('click', handleButtonRollClick);

document
  .querySelector('.btn-hold')
  .addEventListener('click', handleButtonHoldClick);

function handleButtonRollClick() {
  dice = Math.floor(Math.random() * 6) + 1; //random number of the Dice
  var diceDOM = document.querySelector('.dice');
  diceDOM.src = 'dice-' + dice + '.png';
  diceDOM.style.display = 'block';

  if (dice !== 1) {
    scores[activePlayer] += dice;
    document.getElementById('score-' + activePlayer).innerHTML =
      scores[activePlayer];
    document.getElementById('current-' + activePlayer).innerHTML = dice;

    /***WINNING CONDITION ****/
    if (scores[activePlayer] > winning_score) {
      document.getElementById('name-' + activePlayer).textContent = 'Winner';
      diceDOM.style.display = 'none';
    }
  } else {
    scores[activePlayer] = 0;
    document.getElementById('score-' + activePlayer).innerHTML = '0';
    document.getElementById('current-' + activePlayer).innerHTML = '0';
    changePlayer();
  }
}

function handleButtonHoldClick() {
  changePlayer();
}

function changePlayer() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}

function handleButtonNewClick() {
  init();
}

function init() {
  scores = [0, 0]; // Total Score of Player1 scores[0], and Player2 scores[1]
  activePlayer = 0; //0 = Player1, 1 = Player2
  winning_score = 20;

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
}

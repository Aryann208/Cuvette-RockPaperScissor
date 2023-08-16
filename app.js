let playerScore = 0;
let computerScore = 0;
const choicesArray = {
  scissor: './images/17911 1.png',
  rock: './images/icons8-fist-67 1.png',
  paper: './images/icons8-hand-64 1.png',
};

const choiceButtons = document.querySelectorAll('.option');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const playerChoiceImg = document.getElementById('playerChoice');
const computerChoiceImg = document.getElementById('computerChoice');
const playerHighlight = document.getElementById('playerHighlight');
const computerHighlight = document.getElementById('computerHighlight');
const inGame = document.getElementById('inGame');
const postGame = document.getElementById('postGame');
const gameDisplay = document.getElementById('gameDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playAgainButton = document.getElementById('playAgain');
const nextButton = document.getElementById('next');
const rulesButton = document.getElementById('rules');
const rules = document.querySelector('.rulesContainer');
const closeButton = document.querySelector('.closeButton');
const winnerButton = document.querySelector('.option.winner');
const msg1 = document.querySelector('.message-text-1');
const msg2 = document.querySelector('.message-text-2');

const activateResultView = () => {
  gameDisplay.style.display = 'none';
  resultDisplay.style.display = 'block';
  postGame.style.display = 'none';
};
const activateGameView = () => {
  gameDisplay.style.display = 'block';
  resultDisplay.style.display = 'none';
  postGame.style.display = 'none';
  nextButton.classList.add('hide');
};
const activateInGameView = () => {
  postGame.style.display = 'none';
  inGame.style.display = 'block';
};
const activatePostGameView = () => {
  postGame.style.display = 'block';
  inGame.style.display = 'none';
  nextButton.classList.add('hide');
};

activateGameView();

const [rock, paper, scissor] = choiceButtons;
const choices = [rock, paper, scissor];

rulesButton.addEventListener('click', () => {
  rules.classList.toggle('hide');
});

closeButton.addEventListener('click', () => {
  console.log('hide');
  rules.classList.toggle('hide');
});

playAgainButton.addEventListener('click', () => {
  activateGameView();
  activateInGameView();
});

nextButton.addEventListener('click', () => {
  activatePostGameView();
});
nextButton.classList.add('hide');
choiceButtons.forEach((button) =>
  button.addEventListener('click', () => {
    rules.classList.add('hide');
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    playerChoiceImg.src = choicesArray[playerChoice];
    computerChoiceImg.src = choicesArray[computerChoice];
    const winner = determineWinner(playerChoice, computerChoice);
    console.log(winner);

    playerHighlight.classList.add('hide');
    computerHighlight.classList.add('hide');
    playerChoiceImg.parentElement.classList.remove(
      'button-winner',
      'button-loser'
    );
    computerChoiceImg.parentElement.classList.remove(
      'button-winner',
      'button-loser'
    );
    if (winner === 'player') {
      msg1.innerText = 'You Won';
      msg2.innerText = 'Against Computer';

      playerScore++;
      playerScoreSpan.innerText = playerScore;
      if (playerScore > computerScore) nextButton.classList.remove('hide');
      playerHighlight.classList.remove('hide');
      playerChoiceImg.parentElement.classList.add('button-winner');
      computerChoiceImg.parentElement.classList.add('button-loser');
      console.log(computerChoiceImg.parentElement.classList);
      console.log(playerChoiceImg.parentElement.classList);
    } else if (winner === 'computer') {
      msg1.innerText = 'You Lost';
      msg2.innerText = 'Against Computer';
      computerScore++;
      computerScoreSpan.innerText = computerScore;
      computerHighlight.classList.remove('hide');
      // Add winner class and remove loser class
      computerChoiceImg.parentElement.classList.add('button-winner');
      playerChoiceImg.parentElement.classList.add('button-loser');
      console.log(playerChoiceImg.parentElement.classList);
      console.log(computerChoiceImg.parentElement.classList);
    } else {
      msg1.innerText = 'Tie Up';
      msg2.innerText = '';
    }

    activateResultView();
  })
);

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex].id;
};

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return 'tie';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissor') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissor' && computerChoice === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
};

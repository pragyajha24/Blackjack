// let player = {
//   name: "Pragya",
//   chips: 145,
// };

let hasBlackJack = false;

let cards = [];

let sum = 0;

let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// let playerEl = document.getElementById("player-el");

// playerEl.textContent = player.name + ": $" + player.chips;

function getRandom() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  let firstCard = getRandom();
  let secondCard = getRandom();

  cards = [firstCard, secondCard];

  sum = firstCard + secondCard;
  isAlive = true;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards :";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum :" + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card ";
  } else if (sum === 21) {
    message = " You have got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandom();
    sum += card;
    cards.push(card);

    renderGame();
  }
}

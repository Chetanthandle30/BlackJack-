let firstCard = 0;
let secondCard = 0;
let cards = [];
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = false
let message = ""
    // let startEL = document.getElementById('button_el')
let messageEL = document.getElementById('message-el')
    // let sumEL = document.getElementById('sum-el')
let sumEL = document.querySelector("#sum-el")
let cardsEL = document.getElementById("cards-el")
let playerEL = document.getElementById("player-el")

let player = {
    name: "Chetan",
    chips: 134,
}

playerEL.textContent = player.name + ": $" + player.chips;

function getRandom() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random === 1) {
        return 11;
    } else if (random > 10) {
        return 10;
    } else return random
}

function start() {
    firstCard = getRandom();
    secondCard = getRandom();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    hasBlackJack = false
    isAlive = true
    renderGame();
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want another card";

    } else if (sum === 21) {
        message = "You have blackjack";
        hasBlackJack = true;

    } else {
        message = "You lost"
        isAlive = false;
    }
    messageEL.textContent = message;
    cardsEL.textContent = "Cards: " + cards
    sumEL.textContent = "Sum: " + sum;
}

function draw() {
    if (isAlive === true && hasBlackJack === false) {
        let newcard = getRandom();
        sum += newcard;
        cards.push(newcard)
        renderGame();
        console.log(cards)
        console.log("Draw a new card!")
    }
}
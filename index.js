// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let player = {
    name: "uzi",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
//1. Create a variable called isAlive and assign it to true
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": R" + player.chips

// The logic of the game is to score one's cards to atleast x=< 21.  where x >21 is undesirable.
//if (sum<21) {
    //console.log("Do you want to draw a new card? 🙂")} //else if(sum===21){
    //console.log("Wohoo! You've got Blackjack! 🥳")} //else if (sum>21){
    //console.log("You're out of the game! 😭")}


// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
//let age = 22

//if (age<20) {
   // console.log("You can not enter the club!")} 
//else (age>21); {
    //console.log("Welcome!")}

    // Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"
//math.random() generates a random number between 0 & 1, 1 not inclusive.
//math.random()*6 0->5.9 recurring
//math.floor() rounds down the +verational number to its nearest whole number/integer
//x= math.floor(math.random()*6) = 0=<x<=5
function getRandomCard(){
    

    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive =true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent= "Cards: "
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: "+sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message= " You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message

}
function newCard() {
    //console.log("Drawing a new card from the deck")
   if (isAlive === true && hasBlackJack ===false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
   }
}

// cashout!
//console.log(hasBlackJack)  
// 3. Log it out to check that you're doing it right
//console.log(isAlive)
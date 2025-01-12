const userChoice = document.getElementById("userChoice")
const computerChoice = document.getElementById("computerChoice")
const results = document.getElementById("results")

let currentChoice
let randomChoice

const possibleChoices = document.querySelectorAll('button')
possibleChoices.forEach(choices => choices.addEventListener('click', (e) => {
    currentChoice = e.target.id 
    userChoice.innerHTML = currentChoice
    randomize()
    getResults()
}
))

const randomize = () => {
    const outcomes = ['rock', 'paper', 'scissors']
    randomChoice = outcomes[Math.floor(Math.random() * 3)]
    computerChoice.innerHTML = randomChoice
}

const getResults = () => {
    if(currentChoice == randomChoice){
        results.innerHTML = "It's a Tie"
    }
    else if (
        currentChoice == "rock" && randomChoice == "scissors" || 
            currentChoice == "scissors" && randomChoice == "paper" || 
            currentChoice == "paper" && randomChoice == "rock"
    ){
        results.innerHTML = "You Won"
    }
    else{
        results.innerHTML = "You Lost"
    }
}





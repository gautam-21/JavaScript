let num = parseInt(Math.random()*100 + 1);
console.log(num);

const userInput = document.getElementById('guessField');
const submit = document.getElementById('subt')
const guessSlot = document.querySelector('.guesses')
const remainingAttempt = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevGuess = []
let attempt = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        let res = parseInt(userInput.value);
        console.log(res);
        validate(res)
        
    })
}
function validate(guess){
    if(isNaN(guess))
        alert('Please enter the valid number')
    else if (guess < 1 )
        alert('Please enter the number greater then 1')
    else if (guess > 100)
        alert('Please enter the number less than 100')

    else{
        prevGuess.push(guess)
        if(attempt>10){
            displayGuess(guess)
            displayMessage(`Game over.  Random num was ${num}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess){
    if(guess === num){
        displayMessage(`You guess the right number`)
        endGame();
    }
    else if (guess < num){
        displayMessage(`Number is TOO low`)
    }
    else if (guess > num)
        displayMessage(`Number is TOO high`)
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}, `
    remainingAttempt.innerHTML = `${10 - attempt}`
    attempt++;
}
function displayMessage(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame= false
    startGame()
}
function startGame(){
    const newGame = document.getElementById('newGame')
    newGame.addEventListener('click', function(e){
        num = parseInt(Math.random()*100 + 1);
        guessSlot.innerHTML = ''
        prevGuess= []
        attempt = 1
        remainingAttempt.innerHTML = 10
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML = ''
        playGame = true
    })
}
let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt')
const userInput =document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.resultParas');

const p  =document.createElement('p')

let prevGuess = []
let numGuess =1;
let playGame = true;

if(playGame)
{

    submit.addEventListener('click' ,function(e)
    {
            e.preventDefault()
            const guess = parseInt(userInput.value)
            validateGuess(guess)
    });

}

function validateGuess(guess){
    if(isNaN(guess))
    {
        alert('please enter a valid number');
    }
    else if(guess<1)
    {
        alert('please enter a valid number greater than 1');
    }
    else if(guess>100)
    {
        alert('please enter a valid number less than 100');
    }
    else
    {
        prevGuess.push(guess)
        if(numGuess === 11)
        {
         displayGuess(guess);
         displayMessage(`game over ,random number was ${randomNumber}`)
        }
        else
        {
          displayGuess(guess);
          checkGuess(guess);
         
        }

    }

}

function checkGuess(guess){
    //
     if(guess === randomNumber)
     {
        displayMessage('you guessed right');
        endgame()
     }
     else if(guess < randomNumber)
     {
        displayMessage('number is too low')
     }
     else if(guess > randomNumber)
    {
        displayMessage('number is too high');
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML = `${guess}`;
    numGuess++;
    remaining.innerHTML = `{11-numGuess}`
    //
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2> ${message}</h2>`

}
function endgame()
{
 userInput.value =''
 userInput.setAttribute('disabled')
 p.classList.add('button')
 p.innerHTML = `<h2 id = "new game"> start new game</h2>`
 startOver.appendChild(p)
 playGame = false;
 newGame();
}
function newGame()
{
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click' , function(e){
     randomNumber = parseInt(Math.random()*100+1)  
        prevGuess = []
    newGuess =1;
    guess.Slot.innerHTML = ${11-numGuess};
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)
    playGame =true;

    })

}

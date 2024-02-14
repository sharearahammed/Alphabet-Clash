// function play(){
//     // step 1
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

// function continueGame(){
//     const alphabet = getARemdomAlphabet();
//     console.log('Your ramdom alphabet ' , alphabet);

//     // set randomly generated alphabet to the screen 
//     const currentAlphabet = document.getElementById('current-alphabet');
//     currentAlphabet.innerText = alphabet;

//     // set background color
//     setBackgroundColorById(alphabet);
// }

// function play(){
//     hideElementById('home-screen');
//     showElementById('play-ground');
//     continueGame();
// }

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)
// --------------------keyboard Key press---------------------
function handleKeyboardButtonPress(event) {
    const plyerPressed = event.key;
    console.log('player pressed', plyerPressed)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expecterAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(plyerPressed, expecterAlphabet);

    if (plyerPressed === expecterAlphabet) {
        console.log('you get a point')

        // update score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expecterAlphabet);
        cotinueGame();
    }
    else {
        console.log('you missed. you lost a life')
        // Get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;

        // currentLifeElement.innerText = newLife;

    }
}




function cotinueGame() {
    const alphabet = getRandomAlphabet();
    console.log('Your ramdom alphabet ', alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    cotinueGame();
}

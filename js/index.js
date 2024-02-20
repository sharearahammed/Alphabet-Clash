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
// ------------------------------------- Practice ONE 1 ---------------------------------------------------


const audio = new Audio();
let isGamePlayOn = false;

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)
// --------------------keyboard Key press---------------------
function handleKeyboardButtonPress(event) {
    if(isGamePlayOn == false) return;
    const plyerPressed = event.key;
    // console.log('player pressed', plyerPressed)

    // ------stop the game if pressed 'Esc' ------------
    if(plyerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expecterAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(plyerPressed, expecterAlphabet);

    if (plyerPressed === expecterAlphabet) {
        console.log('you get a point')

        audio.src = "./audio/success-sound.mp3";
        audio.play();

        // update score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;


        const currentScore = getTextElementById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore)

        // start a new round
        removeBackgroundColorById(expecterAlphabet);
        cotinueGame();
    }
    else {
        console.log('you missed. you lost a life')
        audio.src = "./audio/wrong-audio.mp3";
        audio.play();
        // Get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;

        // currentLifeElement.innerText = newLife;

        const currentLife = getTextElementById('current-life');
        const newLife = currentLife -1;
        setTextElementValueById('current-life', newLife)

        if(newLife === 0){
            gameOver();
        }

    }
}



function cotinueGame() {
    const alphabet = getRandomAlphabet();
    // console.log('Your ramdom alphabet ', alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    isGamePlayOn = true;

    cotinueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementById('current-score');
    console.log(lastScore);
    setTextElementValueById('game-score', lastScore)

    // clear the last selected alphabet helight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

    isGamePlayOn = false;
}


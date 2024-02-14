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

function cotinueGame(){
    const alphabet = getRandomAlphabet();
    console.log('Your ramdom alphabet ',alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    cotinueGame();
}

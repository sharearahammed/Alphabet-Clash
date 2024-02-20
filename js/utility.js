// function hideElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('hidden');
// }

// function showElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('hidden');
// }

// function setBackgroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-orange-400');
// }


// function  getARemdomAlphabet(){
//     // get or creat an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');

//     // get a ramdom index between 0 to 25
//     const randomNumer = Math.random()*25;
//     const index = Math.round(randomNumer);

//     const alphabet = alphabets[index];
//     // console.log(index , alphabet);
//     return alphabet;

// }

// ------------------------------------- Practice ONE 1 ---------------------------------------------------

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}

// -------BACKGROUND COLOR ADD AND REMOVE----------
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// -----------SCORE AND LIFE UPDATE----------
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}



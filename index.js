const containerEl = document.getElementById("container");

const catsAreAmaizing = ["Cute", "Beautiful", "Nice", "Lovely", "Squishy", "Better than Dogs"];

let catsAreAmaizingIndex = 0;

let characterIndex = 0;

updateNewWord();

function updateNewWord(){
    characterIndex++;
    containerEl.innerHTML = `
    <h1>Cats Are ${catsAreAmaizing[catsAreAmaizingIndex].slice(0,characterIndex)}</h1>
    `;
    if(characterIndex === catsAreAmaizing[catsAreAmaizingIndex].length){
        catsAreAmaizingIndex++
        characterIndex = 0;
    }
    setTimeout(updateNewWord, 400);
}


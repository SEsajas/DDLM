function getName() {
    return localStorage.getItem('name');
}

function getCharacter() {
    return localStorage.getItem('character');
}

const nameText = document.querySelector(".playerName");
const img = document.querySelector(".charImage");

nameText.textContent = `Congratulations!! ${getName()}`;
img.src = getCharacter();

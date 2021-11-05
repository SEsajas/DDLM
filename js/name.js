//  localStorage.clear();
const characters = [
    "./pictures/characters/cha1.png",
    "./pictures/characters/cha2.png",
    "./pictures/characters/cha5.png",
    "./pictures/characters/cha4.png",
];

let characterImage = null;


function getCharacter() {
    return localStorage.getItem("character");
}

function getName() {
    return localStorage.getItem("name");
}

const characterBox = document.querySelector(".character-box");
let Index = 0;


characters.forEach(element => {
    const currentI = Index;
    const button = document.createElement("button");
    const divBody = document.createElement("div");
    const img = document.createElement("img");
    
    button.className = "btn charBtn col-sm-3 col-md-3";
    divBody.className = "card charCard card-body";
    img.className = "my-auto"
    img.src = element; /// element is a string version of the file path
    
    characterBox.appendChild(button);
    button.appendChild(divBody);
    divBody.appendChild(img);

    button.addEventListener("click", function(){
        setCharacter(currentI); //// saved the character index to local storage
    })
    Index++;
});


if (localStorage.getItem("character") !== null) {
    console.log(getCharacter());
    const img = document.createElement("img");
    img.className = "my-auto chooseComponent"
    img.src = getCharacter(); /// element is a string version of the file path
    document.body.appendChild(img);
    characterImage = img;
}

// Check if you have a name and characher
let buttonName = document.querySelector(".saveButton");
let nameInput = document.querySelector("#input_name");
if (buttonName) {
    buttonName.addEventListener("click",()=>{
        console.log("1");
        let name = nameInput.value;
        if(name == "")
        {
            alert (`You did not enter a name`)
        }else if (localStorage.getItem("character") == null) {
            alert (`You did not pick a character`)
        }else{
            localStorage.setItem("name",name);
            location.href = './start.html';
        }
    });
}

function setCharacter(characterIndex) {
    localStorage.setItem("character", characters[characterIndex]);
    console.log(getCharacter());
    characterImage.src = getCharacter();
}





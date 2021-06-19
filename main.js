// ELEMENTOS HTML

let triviaForm = document.getElementById("trivia");
let questionsContainer = document.getElementById("questionsContainer")
let amount = document.getElementById("amount");
let category = document.getElementById("category");
let difficulty = document.getElementById("difficulty");
let type = document.getElementById("type");

// VARIABLES DE CONTROLS
let questions;



//FUNCIONES
let getAPIData = (notReload) => {
    notReload.preventDefault();
    let url = `https://opentdb.com/api.php?amount=${amount.value}&category=${category.value}&
    difficulty=${difficulty.value}&type=${type.value}`;
    
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            questions = data.results;
            startGame();
        });
};

const startGame = () => {
    questionsContainer.style.display = 'flex';
    triviaForm.style.display = 'none';
}

// LISTENERS

triviaForm.addEventListener("submit", getAPIData);

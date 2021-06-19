// ELEMENTOS HTML

let triviaForm = document.getElementById("trivia");
let questionsContainer = document.getElementById("questionsContainer")
let amount = document.getElementById("amount");
let category = document.getElementById("category");
let difficulty = document.getElementById("difficulty");
let type = document.getElementById("type");

// VARIABLES DE CONTROLS
let questions;
let quesIndex = 0;


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
            // console.log(questions);
        });
};

const startGame = () => {
    questionsContainer.style.display = 'flex';
    triviaForm.style.display = 'none';


    // variables para controlar preguntas 1 por 1
    let currentQuestion = questions[quesIndex];
    document.getElementById("questionName").innerText = currentQuestion.question;
    // console.log(currentQuestion.question);

    if(currentQuestion.incorrect_answers.length ==1){
        document.getElementById(1).innerText = "True";
        document.getElementById(2).innerText = "False";
        document.getElementById(3).style.display = "none";
        document.getElementById(4).style.display = "none";
    }else{
        document.getElementById(1).style.display = "block";
        document.getElementById(2).style.display = "block"; 
        document.getElementById(3).style.display = "block";
        document.getElementById(4).style.display = "block";
    }
};

// LISTENERS

triviaForm.addEventListener("submit", getAPIData);

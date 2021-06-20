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
let correct_index_answer;

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
    document.getElementById('logo').style.width = "18rem";


    // variables para controlar preguntas 1 por 1
    let currentQuestion = questions[quesIndex];
    document.getElementById("questionName").innerText = currentQuestion.question;
    // console.log(currentQuestion.question);

    if (currentQuestion.incorrect_answers.length == 1) {
        document.getElementById(1).innerText = "True";
        document.getElementById(2).innerText = "False";
        document.getElementById(3).style.display = "none";
        document.getElementById(4).style.display = "none";
    } else {
        document.getElementById(1).style.display = "block";
        document.getElementById(2).style.display = "block";
        document.getElementById(3).style.display = "block";
        document.getElementById(4).style.display = "block";

        correct_index_answer = Math.round(Math.random() * 4 + 1);
        document.getElementById(correct_index_answer)
         .innerText = currentQuestion.correct_answer;

         let j = 0;
         for (let i = 1; i <= 4; i++){
             if(i === correct_index_answer) continue;
             document.getElementById(i).innerText = 
                currentQuestion.incorrect_answers[j];

             j++;
         }

    };
};

// LISTENERS
triviaForm.addEventListener("submit", getAPIData);


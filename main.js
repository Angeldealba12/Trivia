// ELEMENTOS HTML

let triviaForm = document.getElementById("trivia");
let amount = document.getElementById("amount");
let category = document.getElementById("category");
let difficulty = document.getElementById("difficulty");
let type = document.getElementById("type");

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
            console.log(data);
        });
};

// LISTENERS

triviaForm.addEventListener("submit", getAPIData);

// Setting up basic question display format
var title = document.querySelector("#title");
var startEl = document.querySelector(".start-quiz");
var saveScore = document.querySelector("#save-score");
var playerScore = document.querySelector("#player-score");
var input = document.querySelector(".input");
var inputBox = document.querySelector("#input-box");
var alertMessage = document.querySelector("#alert");
var board = document.querySelector("#board");
var countDownEl = document.querySelector(".count-down");
var pulse = document.querySelector(".pulse");
var timerContainer = document.querySelector("#timer-container");
var questionContainer = document.querySelector(".question-container");
var questionEl = document.querySelector("#question");
var firstOption = document.querySelector("#option-1");
var secondOption = document.querySelector("#option-2");
var thirdOption = document.querySelector("#option-3");
var fourthOption = document.querySelector("#option-4");
var options = document.querySelectorAll("li");
var optionContainer = document.querySelector("ol");
var optionList = document.querySelector(".options");
var body = document.querySelector("body");
var tryAgain = document.querySelector("#try-again");
var darkMode = document.querySelector("#dark-mode");
var lightMode = document.querySelector("#light-mode");

// Timer Variables
var timer = document.querySelector("#timer");
var timeLeft = 90;


// Sound Effects
var clickStart = new Audio();
clickStart.src = "./Assets/Sound Effects/Start game.wav";

var gameOverSound = new Audio();
gameOverSound.src = "./Assets/Sound Effects/Out of Time.wav";

var bingo = new Audio();
bingo.src = "./Assets/Sound Effects/Correct.wav";

var womp = new Audio();
womp.src = "./Assets/Sound Effects/Wrong.wav";

var booyah = new Audio();
booyah.src = "./Assets/Sound Effects/Win Game.wav";

var fiveSeconds = new Audio();
fiveSeconds.src = "./Assets/Sound Effects/count down.wav";

var morning = new Audio();
morning.src = "./Assets/Sound Effects/light-mode.wav";

var night = new Audio();
night.src = "./Assets/Sound Effects/dark-mode.wav";

var click = new Audio();
click.src = "./Assets/Sound Effects/click.wav";

var keyDown = new Audio();
keyDown.src = "Assets/Sound Effects/Keydown.wav";

var alertSound = new Audio();
alertSound.src = "Assets/Sound Effects/Alert.wav";



// For Score Keeping
var scoreEl = document.querySelector("#score");
var score=0;


// Game Rules
timer.textContent = "Here are the rules:";
questionEl.innerHTML = "After you click on the Start Quiz button below, <br>you'll have 90 seconds to answer the following 20 questions by clicking on the options.<br>Each correct answer is worth 5 points,<br>and each wrong answer will cost you 5 seconds from the countdown time!"
scoreEl.textContent = "Your Score: "+score;
playerScore.setAttribute("style","display:none");
saveScore.setAttribute("style","display:none");
board.setAttribute("style","display:none");
tryAgain.setAttribute("style","display:none");
input.setAttribute("style","display:none");
alertMessage.setAttribute("style","display:none");


// List of Questions
var question1 = {
    question: "What is the main purpose of JavaScript?",
    option1: "To style the html",
    option2: "To build the structure of the webpage",
    option3: "To add interactivity to the webpage",
    option4: "None of the above", 
};

var question2 = {
    question: "Where in the HTML file do you link an external JavaScript file?",
    option1: "Inside the <head> section as a <meta> element",
    option2: "At the bottom of the <body> element",
    option3: "Inside the <footer> element",
    option4: "Anywhere in the HTML file",
};

var question3 = {
    question: "What's the keyword you use to declare a JavaScript variable?",
    option1: "'var'",
    option2: "'let'",
    option3: "'const'",
    option4: "All of the above",
};

var question4 = {
    question: "What does DOM stand for?",
    option1: "Domestic Object Management",
    option2: "Document Obliteration Manipulation",
    option3: "Document Object Model",
    option4: "Declaration Object Management",
};

var question5 = {
    question: "which one below is NOT one of the ways to select elements in the HTML file?",
    option1: "document.querySelector()",
    option2: "console.log()",
    option3: "document.getElementsByClassName",
    option4: "document.getElementById",
};

var question6 = {
    question: "Which one below is NOT a data type in JavaScript?",
    option1: "objects",
    option2: "strings",
    option3: "arrays",
    option4: "elements",
};

var question7 = {
    question: "What does the array method '.pop() do?",
    option1: "It removes the last element from an array",
    option2: "It removes the first element of an array",
    option3: "It replaces the last element of an array with the element in the parameter",
    option4: "It adds an element to the beginning of an array",
};

var question8 = {
    question: "what does the method 'Math.random()' do?",
    option1: "It returns a random number between 1 and 10",
    option2: "It returns a random number between 0 and 100",
    option3: "It returns a random number between 0 and 1",
    option4: "It lists all the integers between 0 and 10",
};

var question9 = {
    question: "What do we call the values placed inside the parenthesis after a function or method?",
    option1: "Elements",
    option2: "Scopes",
    option3: "Arguments",
    option4: "Factors",
};

var question10 = {
    question: "What does API stand for?",
    option1: "Application Precedence Integration",
    option2: "Application Programming Interface",
    option3: "Anticipation Program Intercept",
    option4: "Amplified Performance Initiation",
};

var question11 = {
    question: "What will 'document.querySelectorAll('div') return?",
    option1: 'The word "div"',
    option2: "The first <div> element in your HTML",
    option3: "An array with all the <div> elements in your HTML",
    option4: 'The elements with the id of "div"',
};

var question12 = {
    question: "What are the two parameters you pass into the setInterval(); method?",
    option1:"Event target and time left",
    option2: "Beginning second count and ending second count",
    option3: "Targetd element and beginning second count",
    option4: "Function code and a number in millisecond",
};

var question13 = {
    question: "Which one below is NOT an event in JavaScript?",
    option1: "click",
    option2: "keydown",
    option3: "doublekey",
    option4: "mouseover",
};

var question14 = {
    question: "How can you change the style of an element?",
    option1: "Add a style attribute inside the HTML element tag",
    option2: "Use the .setAttribute(); method in JavaScript",
    option3: "Link a CSS stylesheet to the HTML",
    option4: "All of the above",
};

var question15 = {
    question: 'What does "event.preventDefault();" do to a submit button?',
    option1: "It stops the browser from applying its default CSS settings on your HTML",
    option2: "It stops the browser from sending the data input",
    option3: "It prevents the HTML from receiving the data input",
    option4: "None of the above",
};

var question16 = {
    question: "What's the difference between .innerHTML and .textContent?",
    option1: "No difference. They are used interchangeably",
    option2: ".textContent does not render any HTML tags within the text, while .innerHTML does",
    option3: "Both of them recognize and render HTML tags inside the text",
    option4: "Neither of them renders HTML tags",
};

var question17 = {
    question: "Which one below is a correct way to select HTML elements in JavaScript?",
    option1: "element.querySelector(<button>)",
    option2: "element.getSelectorById('#button')",
    option3: "document.getElementsbyClassName('.button')",
    option4: "document.getElementById('button')", 
};

var question18 = {
    question: "What does event.stopPropagation do?",
    option1: "It stops the CSS settings of different elements from contradicting each other",
    option2: "It stops an event from travelling down the DOM tree",
    option3: "It prevents an event from bubbling up the DOM tree",
    option4: "It makes sure that the event target is within the element selected",
};

var question19 = {
    question: "What does JSON.stringify(); do?",
    option1: "It turns an object into a string",
    option2: "It turns a string into an object",
    option3: "It turns a string into a boolean value",
    option4: "None of the above",
};

var question20 = {
    question: "How do you utilize jQuery for your webpage?",
    option1: "Just insert an external JavaScript file in your HTML as usual",
    option2: "Insert a link to the latest JQuery below your own JavaScript file",
    option3: "Insert the link to the latest JQuery above your own JavaScript file",
    option4: "insert the link to the latest JQuery inside the <head> element",
}; 


// Assigning all the Questions to an Array
var questionList = [];
questionList = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,question13,question14,question15,question16,question17,question18,question19,question20];
var x = 0;

// Assigning Correct Answers to an Array
var correctAnswer = [thirdOption, secondOption, fourthOption, thirdOption, secondOption, fourthOption, firstOption,thirdOption, thirdOption, secondOption, thirdOption, fourthOption, thirdOption, fourthOption, secondOption, secondOption, fourthOption, thirdOption, firstOption, thirdOption];


// For Displaying Questions Sequentially, One at a Time
function showQuestion() {

    title.removeAttribute("class","bounce");
    startEl.setAttribute("style","display:none;");
    questionEl.textContent = questionList[x].question;
    options[0].textContent = questionList[x].option1;
    options[1].textContent = questionList[x].option2;
    options[2].textContent = questionList[x].option3;
    options[3].textContent = questionList[x].option4;
    scoreEl.textContent = "Your Score: "+score;


};


// Countdown Sequence
function countDown() {

    var noTimeLeft = setInterval(function(){timer.textContent = "You have "+timeLeft+" seconds left!";
    timeLeft--;

    if (timeLeft <= 4) {
        
        timer.setAttribute("style","color: #ff8b94; font-size: 1.3rem; font-weight: bolder;");
    } 

    if (timeLeft <= 3) {
        fiveSeconds.play();
        timer.setAttribute("style","color: #f65f5f; font-size: 1.3rem; font-weight: bolder;");
    }

    if (timeLeft <= 2) {
        timer.setAttribute("style","color: #fc3c3c; font-size: 1.4rem; font-weight: bolder;");
    }

    if (timeLeft <= 1) {
        timer.setAttribute("style","color: #fc2828; font-size: 1.4rem; font-weight: bolder;");
    }

    if (timeLeft <= 0) { 
        timer.setAttribute("style","color: #fd1717; font-size: 1.5rem; font-weight: bolder;");
    }

    if (timeLeft <= -1) {
        timer.setAttribute("style","color: #ff0000; font-size: 1.6rem; font-weight: bolder;");
    }

    if (timeLeft <= -2) {
        clearInterval(noTimeLeft,1000);
        gameOverSound.play();
        timer.textContent = "Game Over! You ran out of time!"
        timerContainer.setAttribute("style","animation:none;");
        questionContainer.setAttribute("class","question-container");
        questionEl.textContent = "Womp Womp!"
        questionEl.setAttribute("style","font-size: 2rem;");
        options[0].remove();
        options[1].remove();
        options[2].remove();
        options[3].remove();
        playerScore.removeAttribute("style","display:none");
        playerScore.textContent = "Your Score: " + score;
        saveScore.removeAttribute("style","display:none");
        input.removeAttribute("style","display:none");
        scoreEl.remove();

    }},1000);

    
};


// For Continuing to the Next Question and Keeping Count of Total Score
function nextQuestion(event) {

   if (event.target === correctAnswer[x]) {

        bingo.play();
        questionContainer.setAttribute("class","right-answer");
        score+=5;
        scoreEl.textContent = "Your Score: "+score;



        if (x===19) {
            timer.remove();
            timeLeft = Infinity;
            booyah.play();
            timerContainer.textContent = "Booyah!";
            timerContainer.setAttribute("style","animation: none; font-size: 2rem;");
            questionEl.textContent="Congrats! You finished all 20 questions in time!";
            questionEl.setAttribute("style","font-size: 2rem;");
            questionContainer.setAttribute("class","question-container");
            options[0].remove();
            options[1].remove();
            options[2].remove();
            options[3].remove();
            playerScore.removeAttribute("style","display:none");
            playerScore.textContent = "Your Score: " + score;
            saveScore.removeAttribute("style","display:none");
            input.removeAttribute("style","display:none");
            scoreEl.remove();
            

        };

        x++;
        showQuestion();

   

    } else {
        womp.play();
        questionContainer.setAttribute("class","wrong-answer");
        scoreEl.textContent = "Your Score: "+score;
        timeLeft-=5;

       

        if (x===19) {
            timer.remove();
            timeLeft = Infinity;
            booyah.play();
            timerContainer.textContent = "Booyah!";
            timerContainer.setAttribute("style","animation: none; font-size: 2rem;");
            questionEl.textContent="Congrats! You finished all 20 questions in time!";
            questionEl.setAttribute("style","font-size: 2rem;");
            questionContainer.setAttribute("class","question-container");
            options[0].remove();
            options[1].remove();
            options[2].remove();
            options[3].remove();
            playerScore.removeAttribute("style","display:none");
            playerScore.textContent = "Your Score: " + score;
            saveScore.removeAttribute("style","display:none");
            input.removeAttribute("style","display:none");
            scoreEl.remove();

        };

        x++;
        showQuestion();
       

    }



};

// Countdown Alert
function pulseAlert() {
    timerContainer.classList.toggle("pulse-alert");
}

//
function showOptions() {
    optionContainer.classList.add("show-options");
}

// Light-Mode and Dark-Mode
function nightTime() {
    night.play();
    body.classList.add("dark-mode"); 
}

function dayTime() {
    morning.play();
    body.classList.remove("dark-mode");
}

// User Input Sound Effects
function focusSound() {
    click.play();

}

function keyDownSound() {
    keyDown.play();
}

// Local Storage
var playerInfo = '';

// User Initial Entry and Saving
function save(event) {

    title.setAttribute("class","bounce");

    event.preventDefault;

    //localStorage.getItem("playerInfo");

    if (inputBox.value === '') {
        alertSound.play();
        alertMessage.removeAttribute("style","display:none");

    } else {

        clickStart.play();

        /* Turns Player Initials and Scores into a JSON string */
        var playerInfoObj = {
            playerInitial: inputBox.value,
            playerScore: score,
        }
        
        playerInfo = JSON.stringify(playerInfoObj);

        

        // Clears the Input Box
        inputBox.value = "";

        // Display User Scores
        showScoreBoard();

        
        
    }


}

var displayInfo = {};


// To Display User Scores
function showScoreBoard() {
    questionEl.setAttribute("style","display:none");
    playerScore.textContent = "Score Board";
    input.setAttribute("style","display:none");
    saveScore.setAttribute("style","display:none");
    tryAgain.removeAttribute("style","display:none");
    board.removeAttribute("style","display:none");

    displayInfo = JSON.parse(playerInfo);
    var boardEl = document.createElement("li");
    boardEl.innerHTML = "Player: "+displayInfo.playerInitial+" | Score: "+displayInfo.playerScore;
    board.appendChild(boardEl);
    
   
    





}

// Refreshes the Page for the User to Try Again 
function refresh() {
    location.reload();
}


// Event Listners
startEl.addEventListener("click", showQuestion);
countDownEl.addEventListener("click", countDown);
pulse.addEventListener("click",pulseAlert);
saveScore.addEventListener("click", save);
inputBox.addEventListener("click", focusSound);
inputBox.addEventListener("keydown",keyDownSound);
optionList.addEventListener("click", showOptions);
options[0].addEventListener("click", nextQuestion);
options[1].addEventListener("click", nextQuestion);
options[2].addEventListener("click", nextQuestion);
options[3].addEventListener("click", nextQuestion);
tryAgain.addEventListener("click",refresh);
darkMode.addEventListener("click",nightTime);
lightMode.addEventListener("click",dayTime);




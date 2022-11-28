
// Setting up basic question display format
var startEl = document.querySelector(".start-quiz");
var countDownEl = document.querySelector(".count-down");
var pulse = document.querySelector(".pulse");
var timerContainer = document.querySelector("#timer-container");
var questionEl = document.querySelector("#question");
var firstOption = document.querySelector("#option-1");
var secondOption = document.querySelector("#option-2");
var thirdOption = document.querySelector("#option-3");
var fourthOption = document.querySelector("#option-4");
var options = document.querySelectorAll("li");
var optionContainer = document.querySelector("ol");
var optionList = document.querySelector(".options");
var body = document.querySelector("body");
var darkMode = document.querySelector("#dark-mode");
var lightMode = document.querySelector("#light-mode");




function refresh() {
    location.reload();
}

// for Score Keeping
var scoreEl = document.querySelector("#score");
var score=0;

// Timer Variables
var timer = document.querySelector("#timer");
var timeLeft = 60;

// Game Rules
timer.textContent = "Here are the rules:";
questionEl.innerHTML = "After you click on the Start Quiz button below, <br>you'll have 60 seconds to answer the following 20 questions by clicking on the options.<br>If you answer a question correctly, 5 points will be added to your score.<br>If you answer a question incorrectly, you will lose 5 seconds from the countdown.<br>If you finish answering all 20 questions before time is up, you win!<br>If you don't finish answering all 20 questions before time is up, you lose!"
scoreEl.textContent = "Your Score: "+score;



// List of Questions
var question1 = {
    question: "What is the main purpose of JavaScript?",
    option1: "To style the html.",
    option2: "To build the structure of the webpage.",
    option3: "To add interactivity to the webpage.",
    option4: "None of the above.", 
};

var question2 = {
    question: "Where in the HTML file do you link an external JavaScript file?",
    option1: "Inside the <head> section as a <meta> element.",
    option2: "At the bottom of the <body> element.",
    option3: "Inside the <footer> element.",
    option4: "Anywhere in the HTML file.",
};

var question3 = {
    question: "What's the keyword you use to declare a JavaScript variable?",
    option1: "'var'",
    option2: "'let'",
    option3: "'const'",
    option4: "All of the above.",
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
    option1: "It removes the last element from an array.",
    option2: "It removes the first element of an array.",
    option3: "It replaces the last element of an array with the element in the parameter.",
    option4: "It adds an element to the beginning of an array.",
};

var question8 = {
    question: "what does the method 'Math.random()' do?",
    option1: "It returns a random number between 1 and 10.",
    option2: "It returns a random number between 0 and 100.",
    option3: "It returns a random number between 0 and 1.",
    option4: "It lists all the integers between 0 and 10.",
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
/*
var question11 = {
    question: ,
    option1: ,
    option2: ,
    option3: ,
    option4: ,
};

var question12 = {
    question: ,
    option1: ,
    option2: ,
    option3: ,
    option4: ,
};

var question13 = {
    question: ,
    option1: ,
    option2: ,
    option3: ,
    option4: ,
};

var question14 = {
    question: ,
    option1: ,
    option2: ,
    option3: ,
    option4: ,
};

var question15 = {
    question: ,
    option1: ,
    option2: ,
    option3: ,
    option4: ,
};

var question16 = {
    question: ,
    option1: ,
    option2: ,
    option3: ,
    option4: ,
};

var question17 = {
    question: ,
    option1: ,
    option2: ,
    option3: ,
    option4: ,
};

var question18 = {
    question: ,
    option1: ,
    option2: ,
    option3: ,
    option4: ,
};

var question19 = {
    question: ,
    option1: ,
    option2: ,
    option3: ,
    option4: ,
};

var question20 = {
    question: ,
    option1: ,
    option2: ,
    option3: ,
    option4: ,
}; */

// Randomize the Questions


// Assigning all the Questions to an Array
var questionList = [];
questionList = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10/*,question11,question12,question13,question14,question15,question16,question17,question18,question19,question20*/];
var x = 0;

// Assigning Correct Answers to an Array
var correctAnswer = [thirdOption, secondOption, fourthOption, thirdOption, secondOption, fourthOption, firstOption,thirdOption, thirdOption, secondOption, ];



// For Displaying Questions Sequentially, One at a Time
function showQuestion() {

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

    var noTimeLeft = setInterval(countDownTimer,1000);
    
    function countDownTimer() {
        timer.textContent = "You have "+timeLeft+" seconds left!";
        timeLeft--;

        if (timeLeft <= 4) {
            timer.setAttribute("style","color: #ff8b94; font-size: 1.3rem; font-weight: bolder;");
        } 

        if (timeLeft <= 3) {
            timer.setAttribute("style","color: #f65f5f; font-size: 1.3rem; font-weight: bolder;");
        }

        if (timeLeft <= 2) {
            timer.setAttribute("style","color: #fc3c3c; font-size: 1.4rem; font-weight: bolder;");
        }

        if (timeLeft <= 1) {
            timer.setAttribute("style","color: #fc2828; font-size: 1.5rem; font-weight: bolder;");
        }

        if (timeLeft <= 0) { 
            timer.setAttribute("style","color: #fd1717; font-size: 1.6rem; font-weight: bolder;");
        }

        if (timeLeft <= -1) {
            timer.setAttribute("style","color: #ff0000; font-size: 1.7rem; font-weight: bolder;");
        }

     

        if (timeLeft <= -2) {
            clearInterval(noTimeLeft,1000);
            timer.textContent = "Game Over! You ran out of time!"
            timerContainer.setAttribute("style","animation:none;");
            questionEl.remove();
            options[0].remove();
            options[1].remove();
            options[2].remove();
            options[3].remove();
        }




    };
    
};




// For Continuing to the Next Question and Keeping Count of Total Score
function nextQuestion(event) {

   if (event.target === correctAnswer[x]) {
        score+=5;
        scoreEl.textContent = "Your Score: "+score;
        x++;
        showQuestion();

    } else if (x===10) {
        timer.textContent = "BOOYAH!"
        /* stop timer here */
        questionEl.textContent="Congrats! You finished all 20 questions in time!";
        

    } else {
        scoreEl.textContent = "Your Score: "+score;
        timeLeft-=5;
        x++;
        showQuestion();
    }
   





};



function pulseAlert() {
    timerContainer.classList.toggle("pulse-alert");
}

function showOptions() {
    optionContainer.classList.add("show-options");
}

function nightTime() {
    body.classList.add("dark-mode"); 
}

function dayTime() {
    body.classList.remove("dark-mode");
}


// Event Listners
startEl.addEventListener("click", showQuestion);
countDownEl.addEventListener("click", countDown);
pulse.addEventListener("click",pulseAlert);
optionList.addEventListener("click", showOptions);
options[0].addEventListener("click", nextQuestion);
options[1].addEventListener("click", nextQuestion);
options[2].addEventListener("click", nextQuestion);
options[3].addEventListener("click", nextQuestion);
darkMode.addEventListener("click",nightTime);
lightMode.addEventListener("click",dayTime);




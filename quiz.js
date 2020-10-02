var questionsCon = document.getElementById("q-container")
var questionEl = document.getElementById('.question')
var answerButtonsEl = document.getElementById('answer-buttons')
var highscoresBtn = document.getElementById("highscores-btn")
var highscoresCon = document.getElementById("highscores-container")

var timer = document.getElementById("timer");
var btnStart = document.getElementById("start-btn");
var count = 60
var intervalId 
var element = target


function startGame(){
    btnStart.classList.add('hide')
    questionsCon.classList.remove('hide')
}

btnStart.addEventListener('click', startGame())

btnStart.addEventListener('click', function(){
    intervalId = setInterval(function() {
    count -= 1; 
    timer.textContent = count
    if (count==0){
    clearInterval(intervalId)
    element.getAttribute("q-container")
    
    }
    },
    1000);
})
// this timer works, it is just hidden via {display:none} in css


// for(i=0; i < quizQuestions.length; i++){
//     var quiz = quizQuestions[i]

// }


var quizQuestions = [
   { 
    question: 'How many tentacles does an octupus have?',
    answers: [
        {text: '3', wrong: false},
        {text: '8', correct: true},
        {text: '10', wrong: false},
        {text: '5', wrong: false}, ]
   },
   {
    question: 'What noise does a horse make?',
    answers: [
        {text: 'bark', wrong: false},
        {text: 'meow', wrong: false},
        {text: 'ribbit', wrong: false},
        {text: 'ney', correct: true},]
    },
    
    {
    question: 'Which fruit is yellow?',
    answers: [
        {text: 'peach', wrong: false},
        {text: 'orange', wrong: false},
        {text: 'plum', wrong: false},
        {text: 'banana', correct: true},]
    },
    {
    question: 'What colors do you mix to get turquoise?',
    answers: [
        {text: 'blue and green', correct: true},
        {text: 'pink and red', wrong: false},
        {text: 'yellow and orange', wrong: false},
        {text: 'purple and teal', wrong: false},
    ]
    },
    {
    question: 'If you want to catch a fish, what do you use?',
    answers: [
        {text: 'a sock', wrong: false},
        {text: 'a fishing rod', correct: true},
        {text: 'a magnifying glass', wrong: false},
        {text: 'a knife', wrong: false},]
    }
]







// for (let index = 0; index < quizQuestions.length; index++) {
//     var questionText = quizQuestions[index].question;
//     var choicesText = quizQuestions[index].answers;
//     var correctAnswer = quizQuestions[index].answers.correct;
//     randomQuestionDraw(questionText, answersText, correctAnswer);

// }

// function randomQuestionDraw (question, answers, correct) {
//     console.log(question);
//     console.log(answers);
//     console.log(correct);
// }

//highscores is = to localStorage.
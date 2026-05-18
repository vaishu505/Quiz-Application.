const questions = [

{
question:"Which language is used for styling websites?",
answers:[
{text:"HTML", correct:false},
{text:"CSS", correct:true},
{text:"Python", correct:false},
{text:"Java", correct:false}
]
},

{
question:"Which keyword creates a variable in JavaScript?",
answers:[
{text:"define", correct:false},
{text:"let", correct:true},
{text:"varr", correct:false},
{text:"int", correct:false}
]
},

{
question:"Which company developed JavaScript?",
answers:[
{text:"Google", correct:false},
{text:"Meta", correct:false},
{text:"Netscape", correct:true},
{text:"Microsoft", correct:false}
]
},

{
question:"Which HTML tag is used for links?",
answers:[
{text:"<link>", correct:false},
{text:"<a>", correct:true},
{text:"<href>", correct:false},
{text:"<p>", correct:false}
]
}

];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){

currentQuestionIndex=0;
score=0;

nextButton.innerHTML="Next Question";

showQuestion();
}

function showQuestion(){

resetState();

let currentQuestion=questions[currentQuestionIndex];

questionElement.innerHTML=
`${currentQuestionIndex+1}. ${currentQuestion.question}`;

currentQuestion.answers.forEach(answer=>{

const button=document.createElement("button");

button.innerHTML=answer.text;

button.classList.add("btn");

answerButtons.appendChild(button);

if(answer.correct){
button.dataset.correct=answer.correct;
}

button.addEventListener("click",selectAnswer);

});
}

function resetState(){

nextButton.style.display="none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer(e){

const selectedBtn=e.target;

const isCorrect=
selectedBtn.dataset.correct==="true";

if(isCorrect){

selectedBtn.classList.add("correct");

score++;

}else{

selectedBtn.classList.add("wrong");
}

Array.from(answerButtons.children).forEach(button=>{

if(button.dataset.correct==="true"){
button.classList.add("correct");
}

button.disabled=true;

});

nextButton.style.display="block";
}

function showScore(){

resetState();

questionElement.innerHTML=
`You scored ${score} out of ${questions.length}! 🎉`;

nextButton.innerHTML="Play Again";

nextButton.style.display="block";
}

function handleNextButton(){

currentQuestionIndex++;

if(currentQuestionIndex<questions.length){

showQuestion();

}else{

showScore();
}
}

nextButton.addEventListener("click",()=>{

if(currentQuestionIndex<questions.length){

handleNextButton();

}else{

startQuiz();
}
});

startQuiz();
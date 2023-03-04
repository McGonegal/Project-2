import firebaseInfo from "./firebase.js"
import { get, getDatabase, ref, onValue, push, update, set, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { triviaQuestions } from "./project-2-data.js";
// console.log(triviaQuestions)
// THESE STEPS + THE ONES IN FIREBASE.JS WILL BE YOUR RTD SETUP UP EVERY SINGLE TIME
// initialize our specific db using the configured app
const database = getDatabase(firebaseInfo);
// create a specific reference to the root of my db
    // this is the representation of our db (this is how we hook into our db and subsequently update and interact with it)
const dbRef = ref(database);


const question = document.querySelector('#question');

const choices = Array.from(document.querySelectorAll('.choiceText'))

let currentQuestion = {};

let acceptingAnswer = true;

let questionCounter = 0;

let availableQuestions = []

// added our array to the the variable questionsArray

let questionsArray = triviaQuestions;

// console.log(questionsArray);


const maxQuestions = 10;

function startGame(){
	questionCounter= 0;
	// we are using the spread function below to put all available questions into variable
	availableQuestions = {...questions};
	getNewQuestion()
}

function getNewQuestion(){
	const questionIndex = Math.floor(Math.random() * availableQuestions.length)
	currentQuestion =  availableQuestions[questionIndex];
	question.innerHTML = currentQuestion.question;
	choices.forEach(function choice(){
		const number = choice.dataset['number']
		choice.innerHTML = currentQuestion['choice' + number]
	})

	availableQuestions.splice(questionsIndex, 1);

	acceptingAnswer = true;

	
}

choices.forEach(choice => {
	choice.addEventListener('click', e =>{
		if(!acceptingAnswer) return

		acceptingAnswer = false;
		const selectedChoice = e.target
		const selectedAnswer = selectedChoice.dataset['number']

		let classToApply = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect' 

		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(classToApply)
			getNewQuestion()
		}, 1000)
	})
})

startGame ();
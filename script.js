import firebaseInfo from "./firebase.js";
import { get, getDatabase, ref, onValue, push, update, set, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";


// THESE STEPS + THE ONES IN FIREBASE.JS WILL BE YOUR RTD SETUP UP EVERY SINGLE TIME
// initialize our specific db using the configured app
const database = getDatabase(firebaseInfo);
// create a specific reference to the root of my db
    // this is the representation of our db (this is how we hook into our db and subsequently update and interact with it)
const dbRef = ref(database);


onValue(dbRef, function(data){
	if (data.exists()){

	const ourData = data.val();
	const triviaQuestions = ourData.triviaArray;
	// console.log(triviaQuestions);


	
	function loadQuestion() {
		function randomNumber(){
			const randomNum = Math.floor(Math.random() * triviaQuestions.length)
			return randomNum;
		}
	
		
		let currentIndex = randomNumber();
		// console.log(currentIndex);
	
		const currentQuestion = triviaQuestions[currentIndex];
		
	
		console.log(currentQuestion);
	

			const questionHTML = document.getElementById('question')
			questionHTML.innerHTML = currentQuestion.question



		// 
		// function fillAnswers(fillGrid){
			const answerBtns = document.querySelectorAll('.answerBtn');
			const answers = currentQuestion.answers;
			answerBtns.forEach(function (answerBtn, index){
			answerBtn.innerHTML = answers[index]
		});
		// }
	// fillAnswers(currentQuestion);
		// function fillCorrectAnswer(){
		// 	const correctId = currentQuestion.correctAnswer;
		// 	console.log(correctId)
		// }
	// fillCorrectAnswer(currentQuestion);
		// fillAnswers(triviaQuestions[0])
		// function fillQuestionsAndAnswers(number){
		// 	fillAnswers(triviaQuestions[number])
		// 	fillCorrectAnswer(triviaQuestions[number].correctAnswer.value)
		// 	fillQuestions(triviaQuestions[number])
		// }
		// fillQuestionsAndAnswers

		const correctId = currentQuestion.correctAnswer
		console.log(correctId)
		const userAnswerSelection = document.querySelectorAll('.answerBtn');
		// console.log(userAnswerSelection);
		userAnswerSelection.forEach((button) => {
		button.addEventListener('click', function (event){
				const clickId = event.target.id;

				console.log(correctId)
				if (clickId == correctId){
					body.classList.add("correct")
				} else {
					body.classList.add("wrong")
				}
			})
		
		})

		
	}
	loadQuestion();

	const nextButton = document.getElementById('nextBtn');

	// console.log(nextButton)
	let count = 0;
	// nextButton.onclick = function(){
	// 	count++
	// }
	// console.log(count)
		nextButton.addEventListener ('click', function(){
			// if (count <= 10) {
				// console.log("hi")

				body.classList.remove("correct")
				body.classList.remove("wrong")
				// currentIndex = randomNumber();
				loadQuestion()
				// fillQuestionsAndAnswers(currentIndex);
				count = count + 1
			// } else {
				// alert("Game over!")
			// }
			
		})

	}
	// function randomNumber(){
	// 	const randomNum = Math.floor(Math.random() * triviaQuestions.length)
	// 	return randomNum;
	// }

	
	// let currentIndex = randomNumber();

	// const currentQuestion = triviaQuestions[currentIndex];


	// console.log(currentQuestion);

	// // const question = document.getElementById('question')
	
	// // question.innerHTML = triviaQuestions[0].question
	
	// function fillQuestions(triviaQuestionObject){
	//     const questionHTML = document.getElementById('question')
	//     questionHTML.innerHTML = triviaQuestionObject.question
	// }
	// // fillQuestions(triviaQuestions[2])
	// // const trivaAnswersArray = triviaQuestions[0].answers
	// function fillAnswers(fillGrid){
	// 	const answerBtns = document.querySelectorAll('.answerBtn');
	// 	const answers = fillGrid.answers;
	//     answerBtns.forEach(function (answerBtn, index){
	//     answerBtn.innerHTML = answers[index]
	// });
	// }

	// function fillCorrectAnswer(){
	// 	const correctId = currentQuestion.correctAnswer;
	// 	console.log(correctId)
	// }

	// // fillAnswers(triviaQuestions[0])
	// function fillQuestionsAndAnswers(number){
	// 	fillAnswers(triviaQuestions[number])
	// 	fillCorrectAnswer(triviaQuestions[number].correctAnswer.value)
	// 	fillQuestions(triviaQuestions[number])
	// }
	
	// let number = Math.floor(Math.random * 19);
	
	// const startBtnClick = document.getElementById('startBtn');
	
	// startBtnClick.addEventListener('click', function(event){
	// 	fillQuestionsAndAnswers(number);	
	// })
	// fillQuestionsAndAnswers(5);
	// fillQuestionsAndAnswers(currentIndex)
	const body = document.querySelector("body")
})


	


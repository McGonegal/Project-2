import firebaseInfo from "./firebase.js";
import { get, getDatabase, ref, onValue, push, update, set, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { triviaQuestions } from "./project-2-data.js";
// THESE STEPS + THE ONES IN FIREBASE.JS WILL BE YOUR RTD SETUP UP EVERY SINGLE TIME
// initialize our specific db using the configured app
const database = getDatabase(firebaseInfo);
// create a specific reference to the root of my db
    // this is the representation of our db (this is how we hook into our db and subsequently update and interact with it)
const dbRef = ref(database);


	const questionContainerElement = document.getElementById('questionContainer')
	
	function randomNumber(){
		const randomNum = Math.floor(Math.random() * triviaQuestions.length)
		return randomNum;
	}

	
	let currentIndex = randomNumber();

	const currentQuestion = triviaQuestions[currentIndex];


	console.log(currentQuestion);

	const question = document.getElementById('question')
	
	question.innerHTML = triviaQuestions[0].question
	
	function fillQuestions(triviaQuestionObject){
	    const questionHTML = document.getElementById('question')
	    questionHTML.innerHTML = triviaQuestionObject.question
	}
	
	// fillQuestions(triviaQuestions[2])
	
	// const trivaAnswersArray = triviaQuestions[0].answers
	
	function fillAnswers(fillGrid){
		const answerBtns = document.querySelectorAll('.answerBtn');
		const answers = fillGrid.answers;
		
	    answerBtns.forEach(function (answerBtn, index){
	    answerBtn.innerHTML = answers[index]
	});
	}
	
	// fillAnswers(triviaQuestions[0])
	
	function fillQuestionsAndAnswers(number){
		fillAnswers(triviaQuestions[number])
		fillQuestions(triviaQuestions[number])
	}
	
	
	
	// let number = Math.floor(Math.random * 19);
	
	const startBtnClick = document.getElementById('startBtn');
	
	// startBtnClick.addEventListener('click', function(event){
	// 	fillQuestionsAndAnswers(number);
		
	// })
	
	
	
	// fillQuestionsAndAnswers(5);

	fillQuestionsAndAnswers(currentIndex)

	const nextButton = document.getElementById('nextBtn');

	// console.log(nextButton)


	let count = 0;

	nextButton.onclick = function(){
		count ++
	}


	nextButton.addEventListener ('click', function(){
		console.log("nextButton")
		if (count <= 10) {
			currentIndex = randomNumber();
			fillQuestionsAndAnswers(currentIndex);
		} else {
			alert("Game over!")
		}
	})

	const body = document.querySelector("body")
	console.log(body)

	const userAnswerSelection = document.querySelectorAll('.answerBtn');

	userAnswerSelection.forEach((button) => {
		button.addEventListener('click', function (event){
			const clickId = event.target.id;
			const correctId = currentQuestion.correctAnswer
			console.log(clickId, correctId)
			if (clickId == correctId){
				body.classList.add("correct")
			} else {
				body.classList.add("wrong")
			}
		})
	})

	

	
	// ***************NEXT STEPS - call both functions with trivia questions at an index, and plug that index number into both fillQuestions and fillAnswers
	// go through another object in our triviaQuestions array when the next button is pressed.
	// pick a # and call fillQuestionsAndAnswers with that #
	// ***in progress, for tonight or friday***
	
	
	//In the script.js-when the clickEvent happens on the start button run the function to pop up the first trivia question module
		//Create a random number generator to pick a random number from our array that will display a trivia question
		//Query the database for the random question chosen.
		//Below the question there will be a <ul> containing four <li>'s that contains buttons. The <li>'s that is the correct answer will have the value = true. The other three <li>s will contain the value false.
		//Create an eventlistener that listens for the click event on one of the four li buttons. If the li with the value of true is chosen a green pop-up will appear that says correct. If a li with the value of false is chosen
		//a red pop-up module will appear that says incorrect. Both modules will have a "Next Question" button at the bottom.
		//Loop through the function that we used to start the trivia for a total questions.
	
		// ***in progress, for friday***
	
	
		// DEPLOY TO NETLIFY
	
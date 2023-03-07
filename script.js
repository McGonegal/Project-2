import firebaseInfo from "./firebase.js";
import { get, getDatabase, ref, onValue, push, update, set, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";


// THESE STEPS + THE ONES IN FIREBASE.JS WILL BE YOUR RTD SETUP UP EVERY SINGLE TIME
// initialize our specific db using the configured app
const database = getDatabase(firebaseInfo);
// create a specific reference to the root of my db
// this is the representation of our db (this is how we hook into our db and subsequently update and interact with it)
const dbRef = ref(database);


onValue(dbRef, function (data) {
	const body = document.querySelector("body");
	const questionHTML = document.getElementById('question');
	const answerBtns = document.querySelectorAll('.answerBtn');
	const nextButton = document.getElementById('nextBtn');
	const ourData = data.val();
	const triviaQuestions = ourData.triviaArray;

	let currentQuestion = null;
	function loadQuestion() {
		function randomNumber() {
			const randomNum = Math.floor(Math.random() * triviaQuestions.length);
			return randomNum;
		}

		let currentIndex = randomNumber();

		currentQuestion = triviaQuestions[currentIndex];
		// console.log("This is the current question on the page", currentQuestion);

		questionHTML.innerHTML = currentQuestion.question;
		
		const answers = currentQuestion.answers;
		answerBtns.forEach(function (answerBtn, index) {
			answerBtn.innerHTML = answers[index];
		});
	}
	loadQuestion();

	nextButton.addEventListener('click', function () {
		body.classList.remove("correct");
		body.classList.remove("wrong");
		loadQuestion();
	});

	document.querySelectorAll('.answerBtn').forEach((button) => {
		button.addEventListener('click', function (event) {
			const clickId = event.target.dataset.answerIndex;
			if (clickId == currentQuestion.correctAnswer) {
				body.classList.add("correct");
			} else {
				body.classList.add("wrong");
			}
		});
	});
});






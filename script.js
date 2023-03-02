import firebaseInfo from "./firebase.js";
import { get, getDatabase, ref, onValue, push, update, set, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// THESE STEPS + THE ONES IN FIREBASE.JS WILL BE YOUR RTD SETUP UP EVERY SINGLE TIME
// initialize our specific db using the configured app
const database = getDatabase(firebaseInfo);
// create a specific reference to the root of my db
    // this is the representation of our db (this is how we hook into our db and subsequently update and interact with it)
const dbRef = ref(database);

//Create a firebase.js module ****DONE****
	//Configure and export the firebase object ****DONE****
//Create a module for trivia questions and answers****DONE****
	//import any required firebase modules
	//Create one or two arrays:
	//one array to hold the trivia questions and answers ****DONE****
	//triva answers: each question has an array of all the questions, and one object that holds the true answer ****DONE****
	//Set() the trivia answer and questions array(s) into our real time database. ****DONE****
//Create script.js module
	//import the database object and any required firebase modules ****DONE****

// ***Stretch Goal***
//Create a form in the main .html page that will display on the homepage that accepts the user's name
	//create an eventlistener to listen for the form submit
	//store username as a variable ***For Thur
// ***Stretch Goal***


//Create a button in the main .html page that displays on the homepage that will begin the trivia game
	//create an eventlistener to listen for the click of the button
// ***in progress, for tonight or friday***


//In the script.js-when the clickEvent happens on the start button run the function to pop up the first trivia question module
	//Create a random number generator to pick a random number from our array that will display a trivia question
	//Query the database for the random question chosen.
	//Below the question there will be a <ul> containing four <li>'s that contains buttons. The <li>'s that is the correct answer will have the value = true. The other three <li>s will contain the value false.
	//Create an eventlistener that listens for the click event on one of the four li buttons. If the li with the value of true is chosen a green pop-up will appear that says correct. If a li with the value of false is chosen
	//a red pop-up module will appear that says incorrect. Both modules will have a "Next Question" button at the bottom.
	//Loop through the function that we used to start the trivia for a total questions.

    // ***in progress, for friday***
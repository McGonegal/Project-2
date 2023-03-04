import firebaseInfo from "./firebase.js";
import {getDatabase, ref, set, push} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// THESE STEPS + THE ONES IN FIREBASE.JS WILL BE YOUR RTD SETUP UP EVERY SINGLE TIME
// initialize our specific db using the configured app
const database = getDatabase(firebaseInfo);
// create a specific reference to the root of my db
    // this is the representation of our db (this is how we hook into our db and subsequently update and interact with it)
const dbRef = ref(database);

function addToDataBase(key, value){
	const custom = ref(database, key);
	return set(custom, value)
}

const triviaQuestions = [
		 {
			question: "During the American Prohibition, what name was given to the illegal taverns?",
			answer: 1,
			choice1: 'Prohibition Pubs', 
			choice2: 'Speakeasies', 
			choice3: 'Moonshines', 
			choice4: 'Moonlighters',
		},
		{
			question: "What is the longest River in Ireland?",
			answer: 4,
			choice1: 'River Liffey', 
			choice2: 'River Barrow', 
			choice3: 'River Nore', 
			choice4: 'River Shannon',
		},
		{
			question: "What does Volkswagen mean?",
			answer: 1,
			choice1: 'People\'s car', 
			choice2: 'Family car', 
			choice3: 'Powerful Car', 
			choice4: 'Reliable Car',
		},
		{
			question: "Who was the first gymnast to be awarded a 10.0 in the Olympic gammes?",
			answer: 2,
			choice1: 'Beth Tweddle', 
			choice2: 'Nadia Comaneci', 
			choice3: 'Simone Biles', 
			choice4: 'Larisa Latynina',
		},
		{
			question: "What is the collective noun for a group of owls?",
			answer: 4,
			choice1: 'A Tower',
			choice2: 'A Murder', 
			choice3:'A Crash', 
			choice4:'A Parliament',
		},
		{
			question: "What element does the chemical symbol K stand for?",
			answer: 2,
			choice1:'Lead', 
			choice2:'Potassium', 
			choice3:'Calcium', 
			choice4: 'Iron',
		},
		{
			question: "Which movie swept all the major oscar categories in 1992?",
			answer: 3,
			choice1: 'Cape Fear', 
			choice2: 'Thelma and Louise', 
			choice3: 'Silence of the Lambs', 
			choice4: 'Fried Green Tomatoes',
		},
		{
			question: "Who wrote the book To Kill A Mockingbird?",
			answer: 2,
			choice1: 'Margaret Mitchell', 
			choice2: 'Harper Lee', 
			choice3: 'George Eliot', 
			choice4: 'Carson MccCullers',
		},
		{
			question: "Which astrological sign in represented by a scale?",
			answer: 1,
			choice1: 'Libra', 
			choice2: 'Aquarius', 
			choice3: 'Capricorn', 
			choice4: 'Virgo',
		},
		{
			question: "In which country would you find the Hague?",
			answer: 4,
			choice1: 'Belgium', 
			choice2: 'Denmark', 
			choice3: 'Czech Republic', 
			choice4: 'the Netherlands',
		},
		{
			question: "Which greek mythological figure was cursed with prophetic visions no one would believe?",
			answer: 3,
			choice1: 'Helen of Troy', 
			choice2: 'Echo', 
			choice3: 'Cassandra', 
			choice4: 'The Oracle of Delphi',
		},
		{
			question: "Which horror movie featured the tagline 'The Night He Came Home?",
			answer: 2,
			choice1: 'Friday the 13th', 
			choice2: 'Halloween', 
			choice3: 'Nightmare on Elm Street', 
			choice4: 'My Bloody Valentine',
		},
		{
			question: "Who was Henry the 8th's first wife?",
			answer: 1,
			choice1: 'Catherine of Aragon', 
			choice2: 'Anne Boleyn', 
			choice3: 'Jane Seymour', 
			choice4: 'Catherine Howard',
		},
		{
			question: "Where was the footballer Cristiano Ronaldo born?",
			answer: 4,
			choice1: 'Spain', 
			choice2: 'Brazil', 
			choice3: 'Uruguay', 
			choice4: 'Portugal',
		},
		{
			question: "What country was not part of the Axis Powers during WWII?",
			answer: 1,
			choice1: 'the Soviet Union', 
			choice2: 'Germany', 
			choice3: 'Italy', 
			choice4: 'Japan',
		},
		{
			question: "Which month is the aquamarine the birthstone of?",
			answer: 3,
			choice1: 'January', 
			choice2: 'April', 
			choice3: 'March', 
			choice4: 'June',
		},
		{
			question: "Which band released Wonderwall in the 90s?",
			answer: 2,
			choice1: 'Verve', 
			choice2: 'Oasis', 
			choice3: 'Joy Division', 
			choice4: 'Nirvana',
		},
		{
			question: "Who was the second president of the United States?",
			answer: 4,
			choice1: 'Thomas Jefferson', 
			choice2: 'James Madison', 
			choice3: 'Benjamin Franklin', 
			choice4: 'John Adams',
		},
		{
			question: "On average, how many bones are in the adult human body?",
			answer: 2,
			choice1: '186', 
			choice2: '206', 
			choice3: '286', 
			choice4: '306',
		},
		{
			question: "Which fruit is at the top of the Wimbledon gentleman's tropy?",
			answer: 1,
			choice1: 'a Pineapple', 
			choice2: 'a Strawberry', 
			choice3: 'a Banana', 
			choice4: 'an Apple',
		},
		{
			question: "Who painted the Girl with the Pearl Earring?",
			answer: 3,
			choice1: 'Vincent Van Gogh', 
			choice2: 'Leonardo da Vinci', 
			choice3: 'Johannes Vermeer', 
			choice4: 'Sandro Boticelli',
		},
		{
			question: "What video game franchise features the characters Inky and Clyde?",
			answer: 4,
			choice1: 'Pokemon', 
			choice2: 'Super Mario', 
			choice3: 'Casltevania', 
			choice4: 'Pacman',
		},
		{
			question: "Who said 'the only thing I can't resist is temptation?'",
			answer: 3,
			choice1: 'Winston Churchill', 
			choice2: 'Mark Twain', 
			choice3: 'Oscar Wilde', 
			choice4: 'Jesus',
		}
]

	addToDataBase('triviaArray', triviaQuestions)

export {triviaQuestions}
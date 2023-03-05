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
			"question": "During the American Prohibition, what name was given to the illegal taverns?",
			"correctAnswer": 1,
			"answers": ['Prohibition Pubs', 'Speakeasies', 'Moonshines', 'Moonlighters']
		},
		{
			"question": "What is the longest River in Ireland?",
			"correctAnswer": 3,
			"answers": ['River Liffey', 'River Barrow', 'River Nore', 'River Shannon']
		},
		{
			"question": "What does Volkswagen mean?",
			"correctAnswer": 0,
			"answers": ['People\'s car', 'Family car', 'Powerful Car', 'Reliable Car']
		},
		{
			"question": "Who was the first gymnast to be awarded a 10.0 in the Olympic gammes?",
			"correctAnswer": 1,
			"answers": ['Beth Tweddle', 'Nadia Comaneci', 'Simone Biles', 'Larisa Latynina']
		},
		{
			"question": "What is the collective noun for a group of owls?",
			"correctAnswer": 3,
			"answers": ['A Tower', 'A Murder', 'A Crash', 'A Parliament']
		},
		{
			"question": "What element does the chemical symbol K stand for?",
			"correctAnswer": 1,
			"answers": ['Lead', 'Potassium', 'Calcium', 'Iron']
		},
		{
			"question": "Which movie swept all the major oscar categories in 1992?",
			"correctAnswer": 2,
			"answers": ['Cape Fear', 'Thelma and Louise', 'Silence of the Lambs', 'Fried Green Tomatoes']
		},
		{
			"question": "Who wrote the book To Kill A Mockingbird?",
			"correctAnswer": 1,
			"answers": ['Margaret Mitchell', 'Harper Lee', 'George Eliot', 'Carson MccCullers']
		},
		{
			"question": "Which astrological sign in represented by a scale?",
			"correctAnswer": 0,
			"answers": ['Libra', 'Aquarius', 'Capricorn', 'Virgo']
		},
		{
			"question": "In which country would you find the Hague?",
			"correctAnswer": 3,
			"answers": ['Belgium', 'Denmark', 'Czech Republic', 'the Netherlands']
		},
		{
			"question": "Which greek mythological figure was cursed with prophetic visions no one would believe?",
			"correctAnswer": 2,
			"answers": ['Helen of Troy', 'Echo', 'Cassandra', 'The Oracle of Delphi']
		},
		{
			"question": "Which horror movie featured the tagline 'The Night He Came Home?",
			"correctAnswer": 1,
			"answers": ['Friday the 13th', 'Halloween', 'Nightmare on Elm Street', 'My Bloody Valentine']
		},
		{
			"question": "Who was Henry the 8th's first wife?",
			"correctAnswer": 0,
			"answers": ['Catherine of Aragon', 'Anne Boleyn', 'Jane Seymour', 'Catherine Howard']
		},
		{
			"question": "Where was the footballer Cristiano Ronaldo born?",
			"correctAnswer": 3,
			"answers": ['Spain', 'Brazil', 'Uruguay', 'Portugal']
		},
		{
			"question": "What country was not part of the Axis Powers during WWII?",
			"correctAnswer": 0,
			"answers": ['the Soviet Union', 'Germany', 'Italy', 'Japan']
		},
		{
			"question": "Which month is the aquamarine the birthstone of?",
			"correctAnswer": 2,
			"answers": ['January', 'April', 'March', 'June']
		},
		{
			"question": "Which band released Wonderwall in the 90s?",
			"correctAnswer": 1,
			"answers": ['Verve', 'Oasis', 'Joy Division', 'Nirvana']
		},
		{
			"question": "Who was the second president of the United States?",
			"correctAnswer": 3,
			"answers": ['Thomas Jefferson', 'James Madison', 'Benjamin Franklin', 'John Adams']
		},
		{
			"question": "On average, how many bones are in the adult human body?",
			"correctAnswer": 1,
			"answers": ['186', '206', '286', '306']
		},
		{
			"question": "Which fruit is at the top of the Wimbledon gentleman's tropy?",
			"correctAnswer": 0,
			"answers": ['a Pineapple', 'a Strawberry', 'a Banana', 'an Apple']
		},
		{
			"question": "Who painted the Girl with the Pearl Earring?",
			"correctAnswer": 1,
			"answers": ['Vincent Van Gogh', 'Leonardo da Vinci', 'Johannes Vermeer', 'Sandro Boticelli']
		},
		{
			"question": "What video game franchise features the characters Inky and Clyde?",
			"correctAnswer": 3,
			"answers": ['Pokemon', 'Super Mario', 'Casltevania', 'Pacman']
		},
		{
			"question": "Who said 'the only thing I can't resist is temptation?'",
			"correctAnswer": 2,
			"answers": ['Winston Churchill', 'Mark Twain', 'Oscar Wilde', 'Jesus']
		}
]

	export {triviaQuestions}

	addToDataBase('triviaArray', triviaQuestions)


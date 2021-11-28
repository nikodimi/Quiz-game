// Get references to DOM elements
const startEl = document.querySelector(".start-box");
const quizEl = document.querySelector(".quiz-box");
const optionsEl = document.querySelector("#option-list");
const nextBtn = document.querySelector(".next-button");
const startBtn = document.querySelector(".startBtn");
const questionCounter = document.querySelector("#question-counter");
const pointCounter = document.querySelector("#point-counter");
const image = document.querySelector(".img-wrapper img");
const highScoreEl = document.querySelector('.highscore');

// The students array
const students = [
    {	
        name: "Adi Dzocaj",
        image: "assets/images/students/adi-dzocaj.jpg",
	},
	{
        name: "Alexander Bergquist",
        image: "assets/images/students/alexander-bergquist.jpg",
	},
	{
        name: "Alexander Kocman",
        image: "assets/images/students/alexander-kocman.jpg",
	},
	{
        name: "Benjamin Benson",
        image: "assets/images/students/benjamin-benson.jpg",
	},
	{
        name: "Benjamin Tsubarah",
        image: "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
        name: "Calle Nilsson",
        image: "assets/images/students/calle-nilsson.jpg",
	},
	{
        name: "Chikage Takahashi Molander",
        image: "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
        name: "Daniel Be",
        image: "assets/images/students/daniel-be.jpg",
	},
	{
        name: "Daniel Carlsson",
        image: "assets/images/students/daniel-carlsson.jpg",
	},
	{
        name: "Elin Ahlgren",
        image: "assets/images/students/elin-ahlgren.jpg",
	},
	{
        name: "Emma Käck",
        image: "assets/images/students/emma-kack.jpg",
	},
	{
        name: "Eric Ståhl",
        image: "assets/images/students/eric-stahl.jpg",
	},
	{
        name: "Frans Gustavson Påsse",
        image: "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
        name: "Glafira Veretennikova",
        image: "assets/images/students/glafira-veretennikova.jpg",
	},
	{
        name: "Gustaf Grönlund",
        image: "assets/images/students/gustaf-gronlund.jpg",
	},
	{
        name: "Hanna Håkanson",
        image: "assets/images/students/hanna-hakanson.jpg",
	},
	{
        name: "Heidi Sjöberg",
        image: "assets/images/students/heidi-sjoberg.jpg",
	},
	{
        name: "Hugo Carzborn",
        image: "assets/images/students/hugo-carzborn.jpg",
	},
	{
        name: "Jesper Kling",
        image: "assets/images/students/jesper-kling.jpg",
	},
	{
        name: "Johan Ranestam",
        image: "assets/images/students/johan-ranestam.jpg",
	},
	{
        name: "Johanna Bäckström",
        image: "assets/images/students/johanna-backstrom.jpg",
	},
	{
        name: "Johanna Jönsson",
        image: "assets/images/students/johanna-jonsson.jpg",
	},
	{
        name: "Jona Torsson",
        image: "assets/images/students/jona-torsson.jpg",
	},
	{
        name: "Josefine Ahlstedt",
        image: "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
        name: "Julia Jespersdotter Högman",
        image: "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
        name: "Julia Nemell",
        image: "assets/images/students/julia-nemell.jpg",
	},
	{
        name: "Linus Lindberg",
        image: "assets/images/students/linus-lindberg.jpg",
	},
	{
        name: "Malin Olsson",
        image: "assets/images/students/malin-olsson.jpg",
	},
	{
        name: "Maria Haara-Lundhammar",
        image: "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
        name: "Maria Lövgren",
        image: "assets/images/students/maria-lovgren.jpg",
	},
	{
        name: "Nikola Dimitrijoski",
        image: "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
        name: "Paulina Kiendys",
        image: "assets/images/students/paulina-kiendys.jpg",
	},
	{
        name: "Raymond Lam",
        image: "assets/images/students/raymond-lam.jpg",
	},
	{
        name: "Robin Karlsson",
        image: "assets/images/students/robin-karlsson.jpg",
	},
	{
        name: "Sara Almqvist",
        image: "assets/images/students/sara-almqvist.jpg",
	},
	{
        name: "Tim Nilsson",
        image: "assets/images/students/tim-nilsson.jpg",
	},
	{
        name: "Tirapat Sukjit",
        image: "assets/images/students/tirapat-sukjit.jpg",
	},
	{
        name: "Tobias Silfverberg",
        image: "assets/images/students/tobias-silfverberg.jpg",
	},
	{
        name: "Wiktoria Dobrzewinska",
        image: "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];

// Declarations of variables
let newStudents = [];
let questionNum;
let correctImage;
let correctName;
let totalQuestions;
let points;
let highScore = false;

// Set button text
startBtn.innerHTML = "Start";

// Fisher Yates shuffle function
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

const startGame = () => {
	// Add eventlistener to start button
	startBtn.addEventListener("click", (e) => {

		// Set and remove visible elements
		quizEl.classList.add("show");
        startEl.classList.remove('show');

		// Set the button text and disable it on start
        nextBtn.innerHTML = "Next";
        nextBtn.disabled = true;
        
		// Set the question number and points
        questionNum = 0;
        points = 0;

		// Create our new array of students
        create();

		// Checks if highscore exists and prints out to DOM
        if (highScore) {
            highScoreEl.innerHTML = `Current Highscore: ${highScore}`;
        }
	})
};

const create = () => {
	//Create new array
    newStudents = students.map((student) => {
        return {
            name: student.name,
            image: student.image,
        };
    });

    // Shuffle the array
    shuffleArray(newStudents);

	// Set total questions to the length of created array
	totalQuestions = newStudents.length;

	// Get all names from new array
    randomNames = newStudents.map((student) => student.name);

	// Calls the render functions
    render();
}

const render = () => {
	// Increase question number and empty options list
    questionNum++;
    optionsEl.innerHTML = "";

	// Get correct image and name
    correctImage = newStudents[0].image;
    correctName = newStudents[0].name;

	// shuffle array of names
    shuffleArray(randomNames);

	// Get all names except the right one
    let sorted = randomNames.filter((random) => random !== correctName);

	// Fill empty array with 3 wrong names
    let tempNames = [];
    for (let i = 0; i < 3; i++) {
        tempNames.push(sorted[i]);
    }

	// Push the right name in array and shuffle
    tempNames.push(correctName);
    shuffleArray(tempNames);

    // Print out image and list of alternatives
	image.src = correctImage;

    for (let i = 0; i < tempNames.length; i++) {
        optionsEl.innerHTML += `<li class="list-item">${tempNames[i]}</li>`;
    }

    // Print out points and number of questions
    pointCounter.innerHTML = `Points = ${points}`;
    questionCounter.innerHTML = `Question ${questionNum}/${totalQuestions}`;

    // Remove student in first position of array
    newStudents.shift();

	// If last question, change button text
    if (questionNum === totalQuestions) {
        nextBtn.innerHTML = "Avsluta";
    }
};

// Add eventlistener to next-button
nextBtn.addEventListener("click", (e) => {

	// Check if question isn't the last one
    if (questionNum !== totalQuestions) {
		// Disable button
        nextBtn.disabled = true;
		// Render question	
        render();
    } else {
		// Check if highscore exists
        if (highScore) {
			// Check if points is higher, lower or the same as highscore
            if (points > highScore) {
				highScore = points;
                alert(`Wow! You got a new highscore of ${highScore}!`);
            } else if (points < highScore) {
                alert(`Not good! What happened? You got just ${points} points.`);
            }	else {
				alert(`Not better, but not worse than your highscore`);
			}	
        } else {
			// Show result
			alert(`You got ${points} points.`);
			// Set highscore
            highScore = points;
        }
		// Reset game
        reset();
    }
});

// Add eventlistener to list-items
optionsEl.addEventListener("click", (e) => {

	// Get all list-items
    let listItems = document.querySelectorAll(".list-item");

	// Check if target is a list-item
    if (e.target.tagName === "LI") {

		// Check if answer is right
        if (e.target.innerHTML === correctName) {
			// Add class of correct, disable button, increase and print points, disable list-items 
            e.target.classList.add("correct");
            nextBtn.disabled = false;
            points++;
            pointCounter.innerHTML = `Points = ${points}`;
            listItems.forEach((listItem) => {
                listItem.classList.add("disabled");
            });
		// If Answer is wrong
        } else {
			// Add class of wrong, disable button, disable list-items and add class of correct to right list-item
            e.target.classList.add("wrong");
            nextBtn.disabled = false;
            listItems.forEach((listItem) => {
                listItem.classList.add("disabled");
                if (listItem.innerHTML === correctName) {
                    listItem.classList.add("correct");
                }
            });
        }
    } 
});
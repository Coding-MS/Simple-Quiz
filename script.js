
// Dom elements 

const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next-button')

// Variables 

let currentQuestionIndex = 0;
let questions = [
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'], 
    correctAnswer: 'Mars'
},
    {
        question: 'How many continents are there?',
        options: ['5', '6', '7', '8', '9'],
        correctAnswer: '7'
    },
    {
        question: 'What was the First Country in the World to make Bitcoin Legal Tender?', 
        options: ['El-Salvador', ' Greece', 'Spain', 'Central Republic of Africa'], 
        correctAnswer: 'El-Salvador'
    },
    {
        question: 'How many bones do we have in our ear?', 
        options: ['4', '3' , '2', '5' ], 
        correctAnswer: '3'
    }
];

//Event Listeners 
nextButton.addEventListener('click', loadNextQuestion);


// Initalise the quiz 

initialiseQuiz();

function initialiseQuiz() {
    displayQuestion(
        questions[
        currentQuestionIndex
        ]
    )
}

function displayQuestion(questionObj) {
    quizContainer.innerHTML = ' ';
    const questionElement = document.createElement('h2');
    questionElement.innerText = questionObj.question;

    quizContainer.appendChild(questionElement);

    questionObj.options.forEach(option => {
        const button = createOptionButton(option)
        quizContainer.appendChild(button);

    })
}


function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex])
    } else {
        endQuiz();
    }
}

function handleOptionClick(optionSelected) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (optionSelected === correctAnswer) {
        alert('Well done you have selected the correct answer!!')
    } else {
        alert('Incorrect answer')
    }
    loadNextQuestion()
}

function createOptionButton(option) {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('btn', 'btn-outline-primary', 'mt-2');
    button.addEventListener('click', () => handleOptionClick(option));
    return button
}

function endQuiz() {
    quizContainer.innerHTML = '<h2> Game Over!! </h2>';
    nextButton.classList.add('d-none');
}
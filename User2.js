const questions = [
    {
        question: "On an average ,how many hours do you sleep? ",
        options: ["=<6hours", "6-7 hours", ">=8 hours"]
    },
    {
        question: "do you perform any physical exercise?",
        options: ["Yes", "No"]
    },
    {
        question: "water intake/hydration in litre?",
        options: ["<1 Litres", "2 litres", "2.5 litres",".3.5 litres"]
    },
    {
        question: "do you eat junk food?",
        options: ["Yes", "No"]
    },
    {
        question: "Do you experience any frequent headaches?",
        options: ["Yes", "No", "Sometimes"]
    },
{
        question: "Do you involve in any spiritual exercise (meditation)?",
        options: ["Yes", "No", "Sometimes"]
    }
];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-button');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        ${currentQuestion.options.map(option => `
            <div class="option" onclick="selectOption('${option}')">${option}</div>
        `).join('')}
    `;
}

function selectOption(option) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    event.target.classList.add('selected');
    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        questionContainer.innerHTML = '<div class="question">Thank you for answering the questions!</div>';
        nextButton.style.display = 'none';
    }
});

loadQuestion();
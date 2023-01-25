const quizData = [
    {
        question: "What is the color of Trees.",
        a: "Red",
        b: "Black",
        c: "Green",
        d: "Brown",
        correct: "d"
    },
    {
        question: "Who is the most scary Angel.",
        a: "Garbriel",
        b: "Enoch",
        c: "Micheal",
        d: "Abadon",
        correct: "d"
    },
    {
        question: "Who is the son of GOD.",
        a: "Trevor",
        b: "Moses",
        c: "Jesus",
        d: "John",
        correct: "c"
    },
    {
        question: "What is the fastest.",
        a: "Man",
        b: "Camel",
        c: "Car",
        d: "Dog",
        correct: "c"
    },
    {
        question: "Man's best Friend.",
        a: "Snake",
        b: "Cat",
        c: "Dog",
        d: "Snail",
        correct: "c"
    },
    {
        question: "Where was jesus born.",
        a: "USA",
        b: "Asia",
        c: "Europe",
        d: "Africa",
        correct: "d"
    },
    {
        question: "What is the most popular phone the US.",
        a: "Xiaomi",
        b: "Samsung",
        c: "Iphone",
        d: "Lenovo",
        correct: "c"
    },
    {
        question: "Who is the Angel meant for battle.",
        a: "Garbriel",
        b: "Enoch",
        c: "Micheal",
        d: "Abadon",
        correct: "c"
    },
    {
        question: "Which is the following is a gaming phone.",
        a: "S8",
        b: "R.O.G phone 2",
        c: "Tecno camon 18",
        d: "Xiaomi MI 12",
        correct: "b"
    },
    {
        question: "Which is not a programing language.",
        a: "JavaScript",
        b: "Python",
        c: "C++",
        d: "Physics",
        correct: "d"
    }
];

const quiz = document.getElementById ("quiz");
const answerEls = document.querySelectorAll (".answer")
const questionEl = document.getElementById ("question");
const a_text = document.getElementById ("a_text");
const b_text = document.getElementById ("b_text");
const c_text = document.getElementById ("c_text");
const d_text = document.getElementById ("d_text");
const submitBtn = document.getElementById ("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text .innerText = currentQuizData .a;
    b_text .innerText = currentQuizData .b;
    c_text .innerText = currentQuizData .c;
    d_text .innerText = currentQuizData .d;
}
function getSelected() {
    const answerEls = document.querySelectorAll(".answer");
    let answer = undefined;
    answerEls .forEach ((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener ('click', () => {
    const answer = getSelected();
    console .log (answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = 
            `<h3>You have answered a total of ${score} questions out of ${quizData.length}</h3>
            <button onClick="location.reload()">Restart</button>`;
        }
    }
});
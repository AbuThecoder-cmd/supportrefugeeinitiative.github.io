
function submitQuiz() {
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'b',
        q4: 'b',
        q5: 'b'
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);

    for (const [question, answer] of Object.entries(answers)) {
        const userAnswer = formData.get(question);
        if (userAnswer === answer) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';

    if (score === Object.keys(answers).length) {
        resultDiv.innerHTML = `<p class="correct">Perfect! You got all ${score} out of ${Object.keys(answers).length} correct!</p>`;
    } else {
        resultDiv.innerHTML = `<p class="incorrect">You got ${score} out of ${Object.keys(answers).length} correct. Keep learning about SRI's amazing work!</p>`;
    }
}

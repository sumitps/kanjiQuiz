function getCorrect() {
    return quiz.score;
}

function getTotal() {
    return quiz.total;
}

function addCorrect() {
    quiz.score++;
}

function reset() {
    quiz.correct = 0;
    quiz.total = 0;
}
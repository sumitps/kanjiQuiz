function reset(){
    var initQuiz = {
        "cqno" : 1,
        "limit" : 10,
        "score" : 0,
        "total" : 0,
        "cq" : "一",
        "grade" : 5,
        "type" : "readings_on"
    }
    return initQuiz;
}

var quiz = '';
var questions = [];
var answer = '';
var summary = '';

function init(){
    quiz = reset();   
    var questions = []; 
    var scoreLabel = "Score: " + quiz.score + " out of " + quiz.total;
    $('#score').text(scoreLabel);
    console.log('init');
}

function beginQuiz(){
    init();
    //set selected params
    quiz.grade = $('#grade').val();
    quiz.limit = $('#limit').val();
    quiz.total = $('#limit').val();
    quiz.type = $("#type").val();
    var scoreLabel = "Score: " + quiz.score + " out of " + quiz.total;
    $('#score').text(scoreLabel);

    $("#questionNo").text(quiz.cqno);
    questions = chooseqList(quiz.grade, quiz.limit);
    console.log(questions);
    quiz.cq = questions[0];
    $("#question").text(quiz.cq);
    setChoices(quiz.cq, quiz.type);
}

function setChoices(key, type){
    var chs = getChoices(key, type);
    $("#choice1").val(chs[0]);
    $("#lch1").text(chs[0]);
    $("#choice2").val(chs[1]);
    $("#lch2").text(chs[1]);
    $("#choice3").val(chs[2]);
    $("#lch3").text(chs[2]);
    $("#choice4").val(chs[3]);
    $("#lch4").text(chs[3]);
}

function updateScore(){
    addCorrect();
    var scoreLabel = "Score: " + quiz.score + " out of " + quiz.total;
    $('#score').text(scoreLabel);
}

function setNext(){
    quiz.cqno = quiz.cqno + 1;
    quiz.cq = questions[quiz.cqno -1];
    console.log(quiz);
    $("#question").text(quiz.cq);
    $("#questionNo").text(quiz.cqno);
    setChoices(quiz.cq, quiz.type);
    cQuiz();
}

function cQuiz(){
    $('input:radio[name=choice]').each(function () { $(this).prop('checked', false); });
    $('#next').prop('disabled', true);
}

function QuizEnded(){
    $('#finalScore').text("Final Score: " + quiz.score + "/" + quiz.total + "\n Percentage: " + ((quiz.score*100)/quiz.total));
    document.getElementById('quizEnded').style.display = 'block';
}

function updateRowInSummaryTable(myChoice, isCorrect){
    var k = quiz.cq;
    var ans = myChoice;
    var cAns = answer; 
    if(isCorrect){
        var markup = "<tr style='color:green'><td>"+k+"</td><td style>" + myChoice + "</td><td>" + cAns + "</td></tr>";
    }else{
        var markup = "<tr style='color:red'><td>"+k+"</td><td>" + myChoice + "</td><td>" + cAns + "</td></tr>";
    }
    console.log(markup);
    summary += markup;
}
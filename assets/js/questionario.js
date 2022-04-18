var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

console.log(question_one.children[3].children[1])

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})

function totalScore(){
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+ 
    answers.question5;
    
    return total_score;
}

function getInfoBasedOnScore(){
    if(totalScore() < 3){
        var score_info = `
        <p class="infoScoreP">Você ainda pode melhorar seus conhecimentos sobre energias renováveis!!</p> <p class="infoScoreP"><a href="../../index.html" class="infoScoreLink">clique aqui</a> para retornar a página principal e continuar aprendendo</p> <p style="text-align: center; margin-top: 10px">ou</p> <p class="infoScoreP">clique no botão abaixo caso queira enviar seus resultados</p>
        `;
    }
    else if(totalScore() == 5){
        var score_info = `<p class="infoScoreP">Parabéns!!! você está bem informado sobre as energias do futuro :)</p><p class="infoScoreP">Clique no botão abaixo para enviar seu resultado</p>`
    } 
    else if(totalScore() >= 3){
        var score_info = `<p class="infoScoreP">Seus conhecimentos sobre energias renováveis estão bons mas ainda podem ficar melhores!</p> <p class="infoScoreP"><a href="../../index.html" class="infoScoreLink">clique aqui</a> para retornar a página principal e continuar aprendendo</p> <p style="text-align: center; margin-top: 10px">ou</p> <p class="infoScoreP">clique no botão abaixo caso queira enviar seus resultados</p>`
    }

    return score_info;
}
var submit0 = document.getElementById('submit0');
var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "flex";
    el2.style.display = "none";

    console.log(el, el2)
    if(question_number <= 5)
    {
        var firstInputBox = el.children[2].children[0].children[0]
        firstInputBox.click()
    } 

}

submit0.addEventListener('click', function(){
    nextQuestion(1);
    growProgressBar('20%');
})

submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('40%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('60%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('80%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('100%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
})

submit5.addEventListener('click', function(){
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("somafinal").value = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}
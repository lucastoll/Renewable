document.querySelectorAll('.opcao').forEach(item => {
    item.addEventListener('click', event => {
      item.children[0].click()
    })
  })


var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');

var wrong_answers = [];

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        if(event.target.value == 0){
            wrong_answers.push(question_number)
        }
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}


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
question_six.addEventListener('click', function(event){
    storeAnswer(6, event)
})
question_seven.addEventListener('click', function(event){
    storeAnswer(7, event)
})
question_eight.addEventListener('click', function(event){
    storeAnswer(8, event)
})

function totalScore(){
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+ 
    answers.question5+
    answers.question6+
    answers.question7+
    answers.question8;
    
    return total_score;
}

function getInfoBasedOnScore(){
    wrong_answers = wrong_answers.sort(() => Math.random() - 0.5)
    console.log(wrong_answers)
    if(totalScore() < 4){
        var score_info = `
        <p class="infoScoreP">Você ainda deve melhorar seus conhecimentos sobre energias renováveis!!</p>
        <p class="infoScoreP"><a href="../../index.html" class="infoScoreLink">clique aqui</a> para retornar a página principal e continuar aprendendo</p>
        <p style="text-align: center; margin: 20px 0px">ou</p> 
        <p class="infoScoreP"><a href="" class="infoScoreLink">clique aqui</a> para fazer o quiz denovo</p>
        <p class="infoScoreP"><strong>Dica</strong>: você errou a questão ${wrong_answers[0]}</p>
        <p style="text-align: center; margin: 20px 0px">ou</p> 
        <p class="infoScoreP">clique no botão abaixo caso queira enviar seus resultados</p>
        `;
    }
    else if(totalScore() == 8){
        var score_info = `<p class="infoScoreP">Parabéns!!! você está bem informado sobre as energias do futuro :)</p><p class="infoScoreP">Clique no botão abaixo para enviar seus resultados</p>`
    } 
    else if(totalScore() >= 4){
        var score_info = `
        <p class="infoScoreP">Seus conhecimentos sobre energias renováveis estão bons mas ainda podem ficar melhores!</p>
        <p class="infoScoreP"><a href="../../index.html" class="infoScoreLink">clique aqui</a> para retornar a página principal e continuar aprendendo</p>
        <p style="text-align: center; margin: 20px 0px">ou</p> 
        <p class="infoScoreP"><a href="" class="infoScoreLink">clique aqui</a> para fazer o quiz denovo</p>
        <p class="infoScoreP"><strong>Dica</strong>: você errou a questão ${wrong_answers[0]}</p>
        <p style="text-align: center; margin: 20px 0px">ou</p> 
        <p class="infoScoreP">clique no botão abaixo caso queira enviar seus resultados</p>
         `
    }

    return score_info;
}
var submit0 = document.getElementById('submit0');
var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');


function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "flex";
    el2.style.display = "none";

    console.log(el, el2)
    if(question_number <= 8)
    {
        var firstInputBox = el.children[2].children[0].children[0]
        firstInputBox.click()
    } 

}

submit0.addEventListener('click', function(){
    nextQuestion(1);
    growProgressBar('11.1%');
})

submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('22.2%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('33.3%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('44.4%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('55.5%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
    growProgressBar('66.6%');
})
submit6.addEventListener('click', function(){
    nextQuestion(7);
    growProgressBar('77.7%');
})
submit7.addEventListener('click', function(){
    nextQuestion(8);
    growProgressBar('88.8%');
})
submit8.addEventListener('click', function(){
    nextQuestion(9);
    growProgressBar('100%');
})


submit8.addEventListener('click', function(){
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("somafinal").value = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}


/* FORMSPREE */

var form = document.getElementById("my-form");
const popup = document.querySelector('.container_popup')

async function handleSubmit(event) {
  event.preventDefault();
  popup.style.display = 'flex';
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset()
    } 
  })
}
form.addEventListener("submit", handleSubmit)
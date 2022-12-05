var startBtn = document.querySelector('#startBtn');
var mainNav = document.querySelector('.mainNav');
var start = document.querySelector('.start');
var backOnStartBtn = document.querySelector('#backOnStartBtn');
var backOnStart = document.querySelector('.backOnStart');
var backOnStartBtnG = document.querySelector('#backOnStartBtnG');
var backOnStartG = document.querySelector('.backOnStartG');
var backOnStartBtnS = document.querySelector('#backOnStartBtnS');
var backOnStartS = document.querySelector('.backOnStartS');
var backOnStartBtnM = document.querySelector('#backOnStartBtnM');
var backOnStartM = document.querySelector('.backOnStartM');
var backOnStartBtnC = document.querySelector('#backOnStartBtnC');
var backOnStartC = document.querySelector('.backOnStartC');
var historyBtn = document.querySelector('#historyBtn');
var geographyBtn = document.querySelector('#geographyBtn');
var sportBtn = document.querySelector('#sportBtn');
var moviesBtn = document.querySelector('#moviesBtn');
var cultureBtn = document.querySelector('#cultureBtn');
var quizH = document.querySelector('#quizH');
var quizG = document.querySelector('#quizG');
var quizS = document.querySelector('#quizS');
var quizM = document.querySelector('#quizM');
var quizC = document.querySelector('#quizC');

window.addEventListener('load',run);
window.addEventListener('load',runGeo);
window.addEventListener('load',runSpr);
window.addEventListener('load',runMiS);
window.addEventListener('load',runCul);
window.addEventListener('load',runNav);


const myH1 = document.querySelector('h1');
const myH2 = document.querySelector('h2');
const myH3 = document.querySelector('h3');
const myH4 = document.querySelector('h4');
const myH5 = document.querySelector('h5');



let options = document.querySelectorAll('.option');
let optionsGeo = document.querySelectorAll('.optionGeo');
let optionsSpr = document.querySelectorAll('.optionSpr');
let optionsMiS = document.querySelectorAll('.optionMiS');
let optionsCul = document.querySelectorAll('.optionCul');


startBtn.addEventListener('click',showOptions);
historyBtn.addEventListener('click',openQuiz);
geographyBtn.addEventListener('click',openGeo);
sportBtn.addEventListener('click',openSport);
moviesBtn.addEventListener('click',openMiS);
cultureBtn.addEventListener('click',openCul);
backOnStartBtn.addEventListener('click',openNav);
backOnStartBtnG.addEventListener('click',openNav);
backOnStartBtnS.addEventListener('click',openNav);
backOnStartBtnM.addEventListener('click',openNav);
backOnStartBtnC.addEventListener('click',openNav);


function showOptions() {
  mainNav.style.display = "block";
  start.style.display = "none";
};

function openQuiz() {
  start.style.display = "none";
  mainNav.style.display = "none";
  quizH.style.display = "block";
};

function openGeo() {
  start.style.display = "none";
  quizG.style.display = "block";
  mainNav.style.display = "none";
  quizH.style.display = "none";
};

function openSport() {
  start.style.display = "none";
  quizG.style.display = "none";
  mainNav.style.display = "none";
  quizH.style.display = "none";
  quizS.style.display = "block";
};

function openMiS() {
  start.style.display = "none";
  quizG.style.display = "none";
  mainNav.style.display = "none";
  quizH.style.display = "none";
  quizS.style.display = "none";
  quizM.style.display = "block";
};

function openCul() {
  start.style.display = "none";
  quizG.style.display = "none";
  mainNav.style.display = "none";
  quizH.style.display = "none";
  quizS.style.display = "none";
  quizM.style.display = "none";
  quizC.style.display = "block";
};

function openNav() {
  start.style.display = "none";
  quizG.style.display = "none";
  mainNav.style.display = "block";
  quizH.style.display = "none";
  quizS.style.display = "none";
  quizM.style.display = "none";
  quizC.style.display = "none";
};


function run() {
  if(!quiz.end()){
let cq = quiz.getQuestion();
myH1.innerHTML = cq.text;
let rand = quiz.randomize();
  for (let i = 0; i < options.length; i++) {
  options[i].innerHTML = rand[i];
  options[i].onclick = function (){
    quiz.userAnswer(this.innerHTML);
    run();
  }
}
}else{
    alert(`KRAJ
      Vas rezultat je ${quiz.score}`)
    }
};


function runGeo() {
  if(!quizGeo.endGeo()) {
  let cq = quizGeo.getQuestionGeo();
  myH2.innerHTML = cq.textGeo;
  let rand = quizGeo.randomizeGeo();
    for (let i = 0; i < optionsGeo.length; i++) {
    optionsGeo[i].innerHTML = rand[i];
    optionsGeo[i].onclick = function (){
      quizGeo.userAnswerGeo(this.innerHTML);
      runGeo();
    }
    }
  }else{
    alert(`KRAJ
      Vas rezultat je ${quizGeo.scoreGeo}`)
 }
};

function runSpr() {
  if(!quizSpr.endSpr()) {
  let cq = quizSpr.getQuestionSpr();
  myH3.innerHTML = cq.textSpr;
  let rand = quizSpr.randomizeSpr();
    for (let i = 0; i < optionsSpr.length; i++) {
    optionsSpr[i].innerHTML = rand[i];
    optionsSpr[i].onclick = function (){
      quizSpr.userAnswerSpr(this.innerHTML);
      runSpr();
    }
   }
  }else{
    alert(`KRAJ
      Vas rezultat je ${quizSpr.scoreSpr}`)

 }
};

function runMiS() {
  if(!quizMiS.endMiS()){
let cq = quizMiS.getQuestionMiS();
myH4.innerHTML = cq.textMiS;
let rand = quizMiS.randomizeMiS();
  for (let i = 0; i < optionsMiS.length; i++) {
  optionsMiS[i].innerHTML = rand[i];
  optionsMiS[i].onclick = function (){
    quizMiS.userAnswerMiS(this.innerHTML);
    runMiS();
  }
}
  }else{
    alert(`KRAJ
      Vas rezultat je ${quizMiS.scoreMiS}`)
    }
};

function runCul() {
  if(!quizCul.endCul()) {
  let cq = quizCul.getQuestionCul();
  myH5.innerHTML = cq.textCul;
  let rand = quizCul.randomizeCul();
    for (let i = 0; i < optionsCul.length; i++) {
    optionsCul[i].innerHTML = rand[i];
    optionsCul[i].onclick = function (){
      quizCul.userAnswerCul(this.innerHTML);
      runCul();
    }
   }
  }else{
    alert(`KRAJ
      Vas rezultat je ${quizCul.scoreCul}`)

 }
};

function runNav() {

};

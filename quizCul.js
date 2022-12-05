class QuizCul {
  constructor(questionsCul) {
    this.questionsCul = questionsCul;
    this.indexCul = 0;
    this.scoreCul = 0;
 };
 getQuestionCul (){
   return this.questionsCul[this.indexCul];
 };
   randomizeCul() {
     let copyArrayCul = [].concat(this.getQuestionCul().optionsCul);
     let rand = [];
     for (var i = 0; i < 4; i++) {
       let r = Math.floor(Math.random()*copyArrayCul.length);
       rand.push(copyArrayCul[r]);
         copyArrayCul.splice(r,1);
     }
     return rand;
   };
   userAnswerCul(answerCul){
     if (answerCul == this.getQuestionCul().answerCul) {
     this.scoreCul += this.getQuestionCul().pointsCul;
     }
     this.indexCul++;
   }
   endCul(){
     return this.indexCul === this.questionsCul.length;
   };
 }
 const quizCul = new QuizCul(questionsCul);

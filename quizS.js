class QuizSpr {
  constructor(questionsSpr) {
    this.questionsSpr = questionsSpr;
    this.indexSpr = 0;
    this.scoreSpr = 0;
 };
 getQuestionSpr (){
   return this.questionsSpr[this.indexSpr];
 };
   randomizeSpr() {
     let copyArraySpr = [].concat(this.getQuestionSpr().optionsSpr);
     let rand = [];
     for (var i = 0; i < 4; i++) {
       let r = Math.floor(Math.random()*copyArraySpr.length);
       rand.push(copyArraySpr[r]);
         copyArraySpr.splice(r,1);
     }
     return rand;
   };
   userAnswerSpr(answerSpr){
     if (answerSpr == this.getQuestionSpr().answerSpr) {
     this.scoreSpr += this.getQuestionSpr().pointsSpr;
     }
     this.indexSpr++;
   }
   endSpr(){
     return this.indexSpr === this.questionsSpr.length;
   };
 }
 const quizSpr = new QuizSpr(questionsSpr);

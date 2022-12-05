class QuizGeo {
  constructor(questionsGeo) {
    this.questionsGeo = questionsGeo;
    this.indexGeo = 0;
    this.scoreGeo = 0;
 };
 getQuestionGeo (){
   return this.questionsGeo[this.indexGeo];
 };
   randomizeGeo() {
     let copyArrayGeo = [].concat(this.getQuestionGeo().optionsGeo);
     let rand = [];
     for (var i = 0; i < 4; i++) {
       let r = Math.floor(Math.random()*copyArrayGeo.length);
       rand.push(copyArrayGeo[r]);
         copyArrayGeo.splice(r,1);
     }
     return rand;
   };
   userAnswerGeo(answerGeo){
     if (answerGeo == this.getQuestionGeo().answerGeo) {
     this.scoreGeo += this.getQuestionGeo().pointsGeo;
     }
     this.indexGeo++;
   }
   endGeo(){
     return this.indexGeo === this.questionsGeo.length;
   };
 }
 const quizGeo = new QuizGeo(questionsGeo);

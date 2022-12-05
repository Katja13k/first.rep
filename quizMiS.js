class QuizMiS {
  constructor(questionsMiS) {
    this.questionsMiS = questionsMiS;
    this.indexMiS = 0;
    this.scoreMiS = 0;
 };
 getQuestionMiS (){
   return this.questionsMiS[this.indexMiS];
 };
   randomizeMiS() {
     let copyArrayMiS = [].concat(this.getQuestionMiS().optionsMiS);
     let rand = [];
     for (var i = 0; i < 4; i++) {
       let r = Math.floor(Math.random()*copyArrayMiS.length);
       rand.push(copyArrayMiS[r]);
         copyArrayMiS.splice(r,1);
     }
     return rand;
   };
   userAnswerMiS(answerMiS){
     if (answerMiS == this.getQuestionMiS().answerMiS) {
     this.scoreMiS += this.getQuestionMiS().pointsMiS;
     }
     this.indexMiS++;
   }
   endMiS(){
     return this.indexMiS === this.questionsMiS.length;
   };
 }
 const quizMiS = new QuizMiS(questionsMiS);

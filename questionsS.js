class QuestionSpr {
  constructor(textSpr,optionsSpr,answerSpr,pointsSpr,categorySpr) {
    this.textSpr = textSpr;
    this.optionsSpr = optionsSpr;
    this.answerSpr = answerSpr;
    this.pointsSpr = pointsSpr;
    this.categorySpr = categorySpr;
  }
}

const questionsSpr = [

  new QuestionSpr("Koji sport se smatra kraljem sporta?",
                      ["Golf","Košarka","Vaterpolo","Fudbal"],
                      "Fudbal",5,"Sport"),

  new QuestionSpr("Koji tim je pobedio u prvoj NBA utakmici 1946. god?",
                      ["The New York Knicks","Boston Celtics","Toronto Huskies","Chicago Bulls"],
                      "The New York Knicks",5,"Sport"),

  new QuestionSpr("Gde se održalo Svetsko prvenstvo u fudbalu 1986. godine?",
                      ["Argentina","Meksiko","SAD","Brazil"],
                      "Meksiko",5,"Sport"),

  new QuestionSpr("Koliko prstena se nalazi na olimpijskoj zastavi?",
                      ["4","5","6","7"],
                      "5",5,"Sport"),

  new QuestionSpr("Koje godine su se održavale prve moderne olimpijske igre?",
                      ["1912","1896","1788","1854"],
                      "1896",5,"Sport"),

  new QuestionSpr("Protiv koje zemlje je Vejn Runi oborio rekord Engleske po postignutim golovima?",
                      ["Švajcarska","Litvanija","San Marino","Slovenija"],
                      "Švajcarska",5,"Sport"),

  new QuestionSpr("Koji engleski fudbalski klub ima nadimak The Gunners",
                      ["Chelsea","Arsenal","Aston Vila","Everton"],
                      "Arsenal",5,"Sport"),

  new QuestionSpr("Koji tim je osvojio Kup Afričkih nacija rekordnih sedam puta?",
                      ["Kamerun","Senegal","Egipat","Gana"],
                      "Egipat",5,"Sport"),

  new QuestionSpr("Šta je od navedenog poznati fudbalski stadion u Londonu?",
                      ["Wembley Stadium","Old Trafford","Anfield","Celtic Park"],
                      "Wembley Stadium",5,"Sport"),

  new QuestionSpr("Ko je postigao prvi gol na Evropskom prvenstvu u fudbalu 2016. godine?",
                      ["Paul Pogba","Dimitri Payet","Oliver Giroud","Daniel Sturridge"],
                      "Oliver Giroud",5,"Sport")
];

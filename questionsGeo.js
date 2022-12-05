class QuestionGeo {
  constructor(textGeo,optionsGeo,answerGeo,pointsGeo,categoryGeo) {
    this.textGeo = textGeo;
    this.optionsGeo = optionsGeo;
    this.answerGeo = answerGeo;
    this.pointsGeo = pointsGeo;
    this.categoryGeo = categoryGeo;
  }
}

const questionsGeo = [

  new QuestionGeo("Dunav nastaje u Crnoj šumi, a koja reka izvire u Valdajskoj gori?",
                      ["Volga","Don","Dnjepar","Ural"],
                          "Volga",5,"Geografija"),

  new QuestionGeo("Od koliko saveznih država se sastoji Indija?",
                      ["34","29","15","8"],
                      "29",5,"Geografija"),

  new QuestionGeo("Koji norveški grad se smatra najsevernijim gradom na svetu?",
                      ["Harstad","Bode","Vardo","Hemerfest"],
                      "Hemerfest",5,"Geografija"),

  new QuestionGeo("Koje ostrvo čini 60% ukupne površine Japana?",
                      ["Kjušu","Honšu","Hokaido","Šikoko"],
                      "Honšu",5,"Geografija"),

  new QuestionGeo("Denali je najviši vrh kog kontinenta?",
                      ["Severne Amerike","Južne Amerike","Australije","Afrike"],
                      "Severne Amerike",5,"Geografija"),

  new QuestionGeo("Koji je, po broju stanovnika, treći najveći ruski grad posle Moskve i Sank Peterburga?",
                      ["Samara","Kazanj","Ekaterinburg","Novosibirsk"],
                      "Novosibirsk",5,"Geografija"),

  new QuestionGeo("Kako se zove najviši vrh Srbije?",
                      ["Pančićev vrh","Žuti kamen","Crni vrh","Đeravica"],
                      "Đeravica",5,"Geografija"),

  new QuestionGeo("Kojoj od navedenih životinja prirodno stanište nije u Africi?",
                      ["Slon","Tigar","Lisica","Majmun"],
                      "Tigar",5,"Geografija"),

  new QuestionGeo("Najveći kontinent na svetu je?",
                      ["Azija","Afrika","Evropa","Amerika"],
                      "Azija",5,"Geografija"),

  new QuestionGeo("Koji je najveći okean na zemlji?",
                      ["Indijski okean","Tihi okean","Atlantski okean","Arktički okean"],
                      "Tihi okean",5,"Geografija"),

];

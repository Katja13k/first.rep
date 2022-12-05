class QuestionCul {
  constructor(textCul,optionsCul,answerCul,pointsCul,categoryCul) {
    this.textCul = textCul;
    this.optionsCul = optionsCul;
    this.answerCul = answerCul;
    this.pointsCul = pointsCul;
    this.categoryCul = categoryCul;
  }
}

const questionsCul = [

  new QuestionCul("Koje godine je potonuo Titanik?",
["1918. godine","1915. godine","1912. godine","1914. godine"],
"1912. godine",5,"Opšta kultura"),

new QuestionCul("Koja vrsta alkohola je glavni sastojak koktela Mohito?",
["Beli rum","Tekila","Vodka","Viski"],
"Beli rum",5,"Opšta kultura"),

new QuestionCul("Koja zemlja ima najviše pobeda na Evroviziji?",
["Francuska","Italija","Danska","Irska"],
"Irska",5,"Opšta kultura"),

new QuestionCul("U kom gradu se čuva Dnevnik Ane Frank?",
["U Amsterdamu","U Parizu","U Beču","U Londonu"],
"U Amsterdamu",5,"Opšta kultura"),

new QuestionCul("Najdublje jezero na svetu je?",
["Kaspijsko jezero","Jezero Titicaca","Bajkalsko jezero","Viktorijino jezero"],
"Bajkalsko jezero",5,"Opšta kultura"),

new QuestionCul("Najveća vrsta mačaka na svetu je?",
["Gepard","Tigar","Lav","Ris"],
"Tigar",5,"Opšta kultura"),

new QuestionCul("Najveća životinja na svetu je ?",
["Plavi kit","Slon","Žirafa","Zelena anakonda"],
"Plavi kit",5,"Opšta kultura"),

new QuestionCul("'Mislim, dakle postojim'(Cogito ergo sum) je rekao?",
["Rene Descartes","Pitagora","Isaac Newton","Nikola Tesla"],
"Rene Descartes",5,"Opšta kultura"),

new QuestionCul("Marie Antoinette (Marija Antoaneta) je bila?",
["Operska pevačica","Engleska kraljica","Poznati slikar","Francuska kraljica"],
"Francuska kraljica",5,"Opšta kultura"),

new QuestionCul("Na zastavi koje države se nalaze žuta zvezda, knjiga i puška AK-47(Kalašnjikov)?",
["Mozambika","Kube","Severne Koreje","Somalije"],
"Mozambika",5,"Opšta kultura")

];

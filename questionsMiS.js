class QuestionMiS {
  constructor(textMiS,optionsMiS,answerMiS,pointsMiS,categoryMiS) {
    this.textMiS = textMiS;
    this.optionsMiS = optionsMiS;
    this.answerMiS = answerMiS;
    this.pointsMiS = pointsMiS;
    this.categoryMiS = categoryMiS;
  }
}

const questionsMiS = [

  new QuestionMiS("Ko je rekorder sa četiri Oskara za režiju?",
                        ["Robert Altman","Alfred Hičkok","Džon Ford","Norman Torog"],
                        "Džon Ford",5,"Filmovi i serije"),

  new QuestionMiS("Koji južnokorejski film je dobitnik Oskara za najbolji film 2019. godine?",
                        ["Zelena knjiga","Parazit","Koko","Soba"],
                        "Parazit",5,"Filmovi i serije"),

  new QuestionMiS("Džulija Roberts je 2000. godine osvojila Oskara za najbolju glumicu za ulogu?",
                        ["Frida","Mulen Ruž","Erin Brokovič","Fargo"],
                        "Erin Brokovič",5,"Filmovi i serije"),

  new QuestionMiS("Ko je glumio Tonija Soprana u mafijaškoj seriji Sopranovi?",
                        ["Al Paćino","Džejms Gandolfini","Ben Aflek","Brajan Kranston"],
                        "Džejms Gandolfini",5,"Filmovi i serije"),

  new QuestionMiS("Koje godine je emitovana prva epizoda serije Prijatelji?",
                        ["1992. godine","1994. godine","1996. godine","1999. godine"],
                        "1994. godine",5,"Filmovi i serije"),

  new QuestionMiS("U kom gradu se dešava radnja serije Žica (The Wire)?",
                        ["Sijetlu","Atlanti","Čikagu","Baltimoru"],
                        "Baltimoru",5,"Filmovi i serije"),

  new QuestionMiS("Serija Peaky Blinders bavi se uličnom bandom iz kog grada?",
                        ["Birmingema","Pitsburga","Glazgova","Mančestera"],
                        "Birmingema",5,"Filmovi i serije"),

  new QuestionMiS("Koji grad na Jadranskoj obali je poslužio kao scenografija za seriju Game of Thrones",
                        ["Herceg Novi","Rijeka","Dubrovnik","Kotor"],
                        "Dubrovnik",5,"Filmovi i serije"),

  new QuestionMiS("Glavni ženski lik u seriji Uvod u anatomiju je?",
                        ["Lili Aldrin","Meredit Grej","Rejčel Grin","Keri Bredšo"],
                        "Meredit Grej",5,"Filmovi i serije"),

  new QuestionMiS("Film Kum počinje",
                        ["Sahranom","Ubistvom","Venčanjem","Hapšenjem"],
                        "Venčanjem",5,"Filmovi i serije"),

];

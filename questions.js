class Question {
  constructor(text,options,answer,points,category) {
    this.text = text;
    this.options = options;
    this.answer = answer;
    this.points = points;
    this.category = category;
  }
}
const questions = [
  new Question("U kom mestu je Karađorđe izabran za vođu Prvog srpskog ustanka?",
["Takovo","Beograd","Orašac","Niš"],
"Orašac",5,"Istorija Srbije"),
new Question("Kneza Miloša je 1839. godine na čelu Srbije nasledio:",
["Mihajlo Obrenović","Aleksandar Karađorđević","Milan Obrenović","Jovan Obrenović"],
"Milan Obrenović",5,"Istorija Srbije"),

new Question("Koje godine su Turci osvojili Beograd?",
["1523.godine","1521.godine","1531.godine","1533.godine"],
"1521.godine",5,"Istorija Srbije"),

new Question("Srpski vlastelin Lazar Hrebeljanović nosio je titulu...?",
["Cara","Kneza","Vožda","Kralja"],
"Kneza",5,"Istorija Srbije"),

new Question("U kom gradu se Dušan Nemanjić proglasio za cara 1345. godine?",
["Seru","Skoplju","Prizrenu","Kraljevu"],
"Seru",5,"Istorija Srbije"),

new Question("Manastir Mileševu podigao je?",
["Kralj Milutin","Kralj Stefan Prvovenčani","Kralj Vladislav","Sveti Sava"],
"Kralj Vladislav",5,"Istorija Srbije"),

new Question("Ko je bio prvi novovekovni kralj Srbije?",
["Miloš Obrenović","Milan Obrenović","Aleksandar Obrenović","Petar Karađorđević"],
"Milan Obrenović",5,"Istorija Srbije"),

new Question("Koje godine dolazi do poslednje smene dinastija Obrenović - Karađorđević na čelu Srbije?",
["1901. godine","1902. godine","1903. godine","1904. godine"],
"1903. godine",5,"Istorija Srbije"),

new Question("Za zasluge u Kolubarskoj bici, 1914. godine, čin vojvode dobio je?",
["Stepa Stepanović","Živojin Mišić","Radomir Putnik","Pavle Jurišić Šturm"],
"Živojin Mišić",5,"Istorija Srbije"),

];

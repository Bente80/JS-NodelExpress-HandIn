/** Created by Bente on 26-05-2016.
 05. Forklar, ved hjælp af relevante eksempler, hvordan man kan gennemføre sessioner og de juridiske konsekvenser af
    at bruge dette. */

 // Installere session middelware
 var session = require("express-session");

 // Brug af session middleware
 app.use(session({secret:'secret_3162735',saveUninitialized:true, resave: true}));

 // Tilgå session som req.session.    Request propertien req.session bliver brugt til at gemme adgangen til session data.
 app.use(function (req, res, next) {
    var session = req.session;
    if (session.userName) {
        return next();
    } else {
        if (req.body.userName) {
            session.userName = req.body.userName;
            return res.redirect('/');
        } else {
            req.url = '/login';
            return next();
        }
    }
});

/**
 Grunden til at vi bruger sessions er:

  1. Fordi HTTP er en statsløs protokol.
    * Ingen registrerede kontinuitet.

  2. Hver kommunikation er diskret og uden tilknytning til dem, der går forud for eller efter.

  3. En brugers session for en hjemmeside eksisterer i midlertidig hukommelse kun mens brugeren læser og navigere
     på hjemmesiden.
    *Webbrowsere sletter session cookien, når brugeren lukker browseren.

 Hvad er session:
    1. Session er en måde at lagre oplysninger om brugerens oplysninger.
    2. Session data gemmes ikke i cookien selv, bare sessions-id. Session data gemmes server-side.

 Hvad er cookie:
     En cookie er et lille stykke data, som et websted beder din browser til at gemme på din computer eller mobile enhed.

 Hvorfor cookies:
 1. Client-side sessioner bruger cookies og kryptografiske teknikker til at opretholde tilstand uden at gemme så
    mange data på serveren.
 2. Cookien tillader hjemmesiden at "huske" dine handlinger eller præferencer over tid.

 De fleste browsere understøtter cookies, men brugere kan indstille deres browser til at afvise dem og kan slette dem,
 når de vil.
 JavaScript-kode er i stand til at læse en cookie tilhører sit domæne og udføre en handling i overensstemmelse hermed.

 EUROPA hjemmesider skal følge Kommissionens retningslinjer for privatlivets fred og databeskyttelse og informere
 brugerne, at cookies ikke bliver brugt til at indsamle oplysninger unødigt.

 E-databeskyttelsesdirektivet kræver forudgående informeret samtykke til opbevaring af eller adgang til oplysninger på
 en brugers terminaludstyr.

 Med andre ord, skal du bede brugere, hvis de er enige om at de fleste cookies og lignende teknologier
 (fx web beacons, Flash-cookies, etc.), før webstedet begynder at bruge dem.

 Brug dette projekt: JSPeriod2-NodelExpress-JokeApiEx

 På dette link: https://github.com/Bente80/JSPeriod2-NodelExpress-JokeApiEx/blob/master/app.js
 */
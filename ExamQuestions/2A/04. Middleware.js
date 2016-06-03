 /** Created by Bente on 26-05-2016.

  ____________Express middleware______________

  * --- En Express ansøgning er hovedsageligt en stak af middleware, der udføres i en rørledning (sekventielt).---------

  1. Er Node moduler er plug JavaScript komponenter
  2. Gør Express apps meget modulær og fleksible.
  3. Tillader små genbrugelige programmer at håndtere HTTP-specifikke funktionaliteter.
  4. En funktion med adgang til request/response objekt (req/res).

  Hver Middleware funktioner kan udføre følgende opgaver:
   1. Udfør en kode.
   2. Foretag ændringer req/res objekter.
   3. Afslut req/res cyklus.
   4. Kalde næste middleware funktion i stakken.
   5. Hvis den aktuelle middleware funktionen ikke slutter req/res cyklus, skal den kalde next(), så næste
      middleware-funktionen kan sættes i gang. Ellers vil anmodningen blive efterladt hængende.
   6. Hver gang vi bruge app.use eller app. (Metode) funktioner bruger vi middleware.
   7. Pga. at middleware eksekveres sekventielt, er rækkefølgen de listes i vigtig.
        -I dette eks. kommer
                app.use('/api', api); og session-middleware før
                app.use('/', routes); og app.use('/users', users)
        - dette betyder at en person har tilladelse til at bruge REST APIét i URLen selv når man ikke er logget ind.*/

 //________________app.js.___________________
// Aplication middelvare - køres ved hver request, men har ingen path.
 var app = express();


 // Aplication middelvare, men har en path her - køre med alle forespørgsler - put/get/post/delete
 app.use(function (req, res, next) {         //Dette eksempel viser en middelware funktion uden path.
     console.log('Time:', Date.now());       //Function er eksekvret hver gang appen modtager et request.
     next();
 });

 // Her er en middelvare function der kun bliver kaldt med 'get' forespørgsel på. /user/:id.
 app.get('/user/:id', function (req, res, next) {    // Dette eksempel viser en route and dens handler function (middleware system).
     res.send('USER');                               // Funktionen klarer GET requests til stien: /user/:id.
 });

 //__________Error handling - i app.js.___________________________________
 app.use(function(err, req, res, next) {
     res.status(err.status || 500);
     res.render('error', {
         message: err.message,
         error: {}
     });
 });

 // _________Router - App.js.________________________
 // Her viser vi at vi vil bruge den senere/ referere til den.
 var routes = require('./../../routes/index');
 app.use('/', routes);

 // ________________Router - Index.js. router_________________________

 router.get('/', function(req, res, next) {
     res.render('index', { title: 'Express' });
 });



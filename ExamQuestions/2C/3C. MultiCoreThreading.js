/**Created by Bente on 26-05-2016.
 03. Node.js bruger en Ikke-blokerende single thread strategi til at håndtere asynkron opgave. Forklare strategier til
     Implementere en node.js baseret server-arkitektur, der stadig kunne drage fordel af en multi-core server.

 Selvom Node bruger en single thread strategi, er det let at skalere det til multi-core maskiner.
 For CPU-intensive opgaver kan node.js starte child processer og
 til opskalering webservices er tricket at starte flere node forekomster op i farten.

 Node har indbygget understøttelse for dette via Clustering modul og Express køre flere virtuelle Værter (dvs. køre flere
 domæner under én IP) ud af boxen.

 Cluster modulet tillader dig at oprette et lille netværk af separate processer (arbejdstagere), som deler server porte med
 den vigtigste Node proces (master) .Dette giver din node.js app adgang til den fulde effekt af din server. Et klynge modul
 udfører de samme node.js proces flere gange. Derfor er den første ting du skal gøre er at identificere, hvad del af koden er
 for master processen, og hvilken del er for arbejderne. Føreren processen er den proces du indleder, som igen initialisere arbejderne.
 For at starte en arbejdstager proces inde i en mester proces, bruger vi fork () metoden.

* Kig inde i www. filen i bin folderen øverst.

* for at lave en test kør programmet    npm start       &

* kør testen CPU tester
           * så kan man se hvis man åbnede X antal vinduer, hvilke kerner de ville bruge. */
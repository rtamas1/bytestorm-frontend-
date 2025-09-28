API aplicatie Pentru a putea vedea datele primite prin API trebuie adaugat un "." inainte de fisierul env din env cum este acum trebuie sa fie .env

# frontend

În cadrul proiectului de monitorizare a serelor, Departamentul Dezvoltare Frontend trebuie să realizeze partea de frontend a aplicației.

Aceasta va fi realizată mai întâi în React, urmând ca, după testare, să fie convertită în aplicație mobilă (React native). Conversia va fi realizată automat, folosind ChatGPT (sau o altă aplicație de AI). Aplicația mobilă va fi și ea testată și, eventual, modificată.

După clonarea depozitului dați comanda:

_`npm install`_

Ca efect, se va creea directorul _`node_modules`_ conținând toate modulele referite în fișierul _`package.json`_.

Interfața grafică a aplicației va presupune crearea unor indicatoare care reflectă starea spațiului supravegheat:

[<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%20813077.png">](https://www.fullstack.com/labs/resources/blog/creating-an-svg-gauge-component-from-scratch).

Selectați imaginea pentru a accesa un tutorial specializat, bazat pe crearea imaginii unui indicator folosind cod SVG (eng. _Scalable Vector Graphics_). O documentare mai cuprinzătoare se poate face căutând _creating gauges using svg_.

### Observație:

Dintre tehnologiile utilizabile pentru generarea unor astfel de indicatoare se pare că generarea lor folosind cod SVG este suportată de React și React Native. Pentru _React Native_ se va utiliza [react-native-svg](https://github.com/software-mansion/react-native-svg).

## Activități preconizate

1. Familiarizare cu aplicațiile Git și GitHub
2. Crearea componentelor React necesare
3. Crearea interfeței grafice conținând componentele necesare
4. Crearea intefeței necesare logării în aplicație
5. Testarea finală
6. Conversia în React Native a aplicației
7. Testarea aplicației React Native

Observații:

1. Componentele React (React Native) necesare vor trebui să afișeze valoarea unei mărimi fizice sau să acționeze un motor (pompă, ventilație). La selectarea unei componente destinate afișării unei valori, aplicația va afișa informații detaliate despre valoarea măsurată, inclusiv o reprezentare grafică a variației acesteia pe diverse durate de timp (o zi, o săptămână, o lună).
2. Pentru fiecare componentă dedicată afișării unei mărimi va trebui definită structura obiectului care conține valoarea unei măsurări. Țineți cont de posibilitățile de extindere a aplicației (mai mulți senzori din tipul vizat, mai multe spații aparținând unui utilizator al aplicației, mai mulți utilizatori).
3. În lipsa părții de server, apelasea enpoint-urilor necesare va fi simulată printr-un JSON Server sau un mic server creat folosind Express.js.

## Rulare cu _`Vite`_

Pentru a utiliza _`Vite`_ va trebui dată comanda de instalare a acestuia în proiect:

```
npm install -D vite
```

Comanda de rulare a aplicației:

```
npm run dev
```

Comanda dată lansează în execuție un server de dezvoltare care comunică prin portul _`localhost:5173`_. După pornirea serverului se va tasta _`o + Enter`_. Efectul acestei comenzi este afișarea în browser a interfeței grafice a aplicației.

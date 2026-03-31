# eindopdracht_web-scripting

Mijn concept draait hoofdzakelijk om persoonlijke doelen, en random challenges die dagelijks voltooid kunnen worden

------ dashboard ------
- je kan activiteiten toevoegen, hier kan je een titel meegeven, een datum, snelheid, afstand, activiteit, tijd, en een notitie. de laatste activiteit die je toevoegd kan je bekijken op je dashboard
- rechtst van jouw dashboard zie je statistieken staan (het aantal doelen dat je momenteel hebt staan en hoeveel activiteiten je al hebt gedaan)
- daaronder staat een dagelijkse quote (deze wordt om de 10s vernieuwd om aan te tonen dat deze om de zoveel tijd random veranderd). dit gebeurd met een css animatie
- onderaan staan de doelen. je kan tot 2 doelen toevoegen en de voortgang wordt gebasseerd op de activiteiten die je gedaan hebt en dus opgeslagen staan in local storage. je kan een titel meegeven, jouw aantal km dat je wilt doen en de soort activiteit. de voortgang wordt dan automatisch berekent adhv de doelafstand en gekozen activiteit

------ challenges pagina ------
- bovenaan zien we een aftel klok. na tien seconden komt er aan random challenge tevoorschijn. deze wordt dan opgeslagen en blijft heel de dag het zelfde. als je deze challenge gedaan hebt, kan je hem doorstrepen door op "ik heb deze challenge voltooid" te drukken. je ziet de huidige dag dan ook groen worden -> dit staat voor geslaagd.
- de kalender bestaan uit 31 dagen. de huidige dag staat in het zwart, de andere dagen in het wit. al de dagen die vòòr de datum van vandaag vallen kan je klikken, groen of rood. groen staat voor geslaag en rood voor niet geslaagd (voor de dagen na de huidige datum kan je nog niet weten of je de challenge gaat slagen)
- onderaan wordt bij gehouden hoeveel dagen geslaagd of niet geslaagd zijn. deze wordt bij elke klik op een dag aangepast.

------ activiteiten pagina -------
- tot slot heb je de activiteiten pagina. dit is een overzicht van alle activiteiten. het geeft het aantal activiteiten mee, titel, datum, afstand, tijd, snelheid en een verwijder button.
- met de verwijder button kan je een activiteit verwijderen. de activiteit wordt dan verwijderd uit local storage, en alle indexen worden aangepast naar de nieuwe telling, zonder de verwijderde activiteit


------ link naar FIGMA ------
https://www.figma.com/design/63HZcioCu7Wj9bVplgAc0I/DVG-A-Kasper-Daelemans---Web-Scripting-Eindopdracht?node-id=0-1&t=jUvLlQjMksm1hDBi-1


------ link naar online pagina - github ------
https://kasperdlns.github.io/eindopdracht_web-scripting/index.html
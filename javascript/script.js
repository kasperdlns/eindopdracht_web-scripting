// nieuwe activiteit toevoegen aan dashboard
let addActivitiy = document.querySelector(".addActivitiy");
const popup = document.querySelector(".popup");

//popup tevoorschijn laten komen
addActivitiy.addEventListener("click", function () {
    popup.style.display = "block"
})

//actviteit opslaan 
const saveActivitiy = document.querySelector(".saveActivitiy");

saveActivitiy.addEventListener("click", function () {
    saveActivity()
    popup.style.display = "none"
});

// quote veranderen
let quotes = [
    "Wie vandaag niet traint, blijft morgen achter.",
    "Blijf rennen, ook als je benen protesteren.",
    "Elke druppel zweet brengt je dichter bij je doel.",
    "Sterke lichamen beginnen bij een sterke geest.",
    "Geef niet op, je bent sterker dan je denkt.",
    "Succes wordt verdiend, niet gegeven.",
    "Elke stap telt, ook de kleinste.",
    "Durf te pushen, durf te winnen.",
    "Doorzetten is het verschil tussen dromen en bereiken.",
    "Vandaag pijn, morgen trots."
];

//nieuwe quote om de second
newQuote() //random nieuwe quote bij herladen

//om de 10seconden nieuwe quote
let timerQuote = setInterval(function () {
    newQuote()
}, 10000)

function newQuote() {
    let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    document.querySelector(".quote h1").textContent = quotes[randomQuoteIndex]
}

const titelDashboard = document.querySelector(".titel__dashboard");
const snelheidDashboard = document.querySelector(".snelheid__dashboard");
const afstandDashboard = document.querySelector(".afstand__dashboard");
const tijdDashboard = document.querySelector(".tijd__dashboard");
const datumDashboard = document.querySelector(".datum__dashboard");
const notitieDashboard = document.querySelector(".notitie__dashboard");

//activiteit opslaan in dashboard
function saveActivity() {
    const titel = document.querySelector("#titel__Input").value;
    const activiteit = document.querySelector("#Activiteit__Input").value;
    const snelheid = document.querySelector("#snelheid__Input").value;
    const afstand = document.querySelector("#afstand__Input").value;
    const tijd = document.querySelector("#tijd__Input").value;
    const datum = document.querySelector("#datum__Input").value;
    const notitie = document.querySelector("#notitie__Input").value;

    titelDashboard.textContent = titel;
    snelheidDashboard.textContent = snelheid + " km/u";
    afstandDashboard.textContent = afstand;
    tijdDashboard.textContent = tijd;
    datumDashboard.textContent = datum;
    notitieDashboard.textContent = notitie;

    //opslaan in local storage
    nieuweActiviteit = {
        titel: titel,
        afstand: afstand,
        activiteit: activiteit,
        tijd: tijd,
        snelheid: snelheid,
        datum: datum,
        notitie: notitie
    }

    saveToLocalStorage(nieuweActiviteit)
}


function saveToLocalStorage(nieuweActiviteit) {
    let activiteiten = localStorage.getItem("activities")

    if (!activiteiten) { //er zijn nog geen activiteiten
        activiteiten = []; //voeg een lege string toe
    } else { //er zijn wel activiteiten
        activiteiten = JSON.parse(activiteiten); //omzetten naar een string
    }

    activiteiten.push(nieuweActiviteit);

    localStorage.setItem("activities", JSON.stringify(activiteiten));
}


function getFromLocalStorage() {
    let activiteiten = JSON.parse(localStorage.getItem("activities")) || [];
    let laatsteActiviteit = activiteiten[activiteiten.length - 1];
    console.log(laatsteActiviteit)

    if (laatsteActiviteit) {
        titelDashboard.textContent = laatsteActiviteit.titel;
        snelheidDashboard.textContent = laatsteActiviteit.snelheid + " km/u";
        afstandDashboard.textContent = laatsteActiviteit.afstand;
        tijdDashboard.textContent = laatsteActiviteit.tijd;
        datumDashboard.textContent = laatsteActiviteit.datum;
        notitieDashboard.textContent = laatsteActiviteit.notitie;
    }

}

getFromLocalStorage()




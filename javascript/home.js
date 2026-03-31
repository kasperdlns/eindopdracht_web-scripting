// nieuwe activiteit toevoegen aan dashboard
let addActivity = document.querySelector(".addActivity");
const popup = document.querySelector(".popup");

//popup tevoorschijn laten komen
addActivity.addEventListener("click", function () {
    popup.classList.remove("hidden");
})

//actviteit opslaan 
const saveActivitiy = document.querySelector(".saveActivitiy");

saveActivitiy.addEventListener("click", function () {
    saveActivity()
    popup.classList.add("hidden");
    pasteInHtml();
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
    const quoteElement = document.querySelector(".quote h1");

    // reset animatie
    quoteElement.classList.remove("text-quotes");

    // force reflow
    void quoteElement.offsetWidth;

    // nieuwe tekst
    quoteElement.textContent = quotes[randomQuoteIndex];

    // animatie opnieuw starten
    quoteElement.classList.add("text-quotes");
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

    if (titel === "" || activiteit === "" || snelheid === "" || afstand === "" || tijd === "" || datum === "") {
        alert("Vul alle verplichte velden in!")
        return
    }

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

//opslaan in local storage
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

//opladen uit local storage
function getFromLocalStorage() {
    let activiteiten = JSON.parse(localStorage.getItem("activities")) || [];
    let laatsteActiviteit = activiteiten[activiteiten.length - 1];

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

//btn klik: doel toevoegen -> gebruiker kan input ingeven
//btn klkik: doel opslaan
//checken hoeveel doelen er al bestaan -> meer dan twee error
//max en huidige km"s berekenen en omzetten naar 100 voor progress (max & value) (aparte functie)
//opslaan in local storage (aparte functie)
//ophalen uit local storage (aparte functie) -> dit moet bij herladen en als er een nieuwe activiteit wordt toegevoegd
//neerprinten in html (aparte functie) -> dit moet bij herladen en als er een nieuwe activiteit wordt toegevoegd

//functies:     saveToLocalStorage
//              CalculateValues
//              saveToLocalStorage
//              getFromLocalStorage
//              PasteInHtml


// DOM elements
let popupDoel = document.querySelector(".popupDoel");
let buttonDoel = document.querySelector(".doelBtn");
let saveDoelBtn = document.querySelector(".saveDoel");
let progressContainer = document.querySelector(".progressBars");
let titelPopup = document.querySelector(".titelDoel input");
let doelafstand = document.querySelector(".doelAfstand input");

// Show popup
buttonDoel.addEventListener("click", () => {
    popupDoel.classList.remove("hidden");
});

// Save goal button
saveDoelBtn.addEventListener("click", function () {
    addProgress();
});






//opslaan van het doel
function saveGoalToLocalStorage(goal) {
    let savedGoals = JSON.parse(localStorage.getItem("goals")) || []; //geef wel een lege string terug indien niets gevonden
    savedGoals.push(goal);
    localStorage.setItem("goals", JSON.stringify(savedGoals));
}

//berekenen van de waarden (al gedaan/doel)
function calculateValues(activityType) {
    let activities = JSON.parse(localStorage.getItem("activities")) || [];
    let filtered = activities.filter(item => item.activiteit === activityType);
    let totalDistance = filtered.reduce((total, item) => total + Number(item.afstand), 0);
    return totalDistance;
}

//ophalen van doel(en) uit local storage
function getGoalFromLocalStorage() {
    return JSON.parse(localStorage.getItem("goals")) || [];
}

// voeg het doel toe
function addProgress() {
    popupDoel.classList.add("hidden");

    if (progressContainer.children.length === 2) {
        document.querySelector(".error").classList.remove("hidden");
        console.log("Er kunnen er geen meer bij");
        return;
    }

    let activiteitType = document.querySelector("#doel-Activiteit").value;
    let totalDistance = calculateValues(activiteitType);
    let goalValue = Number(doelafstand.value);

    // maak de html elementen
    let article = document.createElement("article");

    let p = document.createElement("p");
    p.textContent = titelPopup.value;

    let progress = document.createElement("progress");
    progress.value = totalDistance;
    progress.max = goalValue;

    article.appendChild(p);
    article.appendChild(progress);
    progressContainer.appendChild(article);

    // Save goal in localStorage
    saveGoalToLocalStorage({
        titel: titelPopup.value,
        activiteit: activiteitType,
        doel: goalValue,
        progress: totalDistance
    });
}

//plak het in html
function pasteInHtml() {
    progressContainer.innerHTML = "";

    let savedGoals = getGoalFromLocalStorage();

    savedGoals.forEach(goal => {
        let totalDistance = calculateValues(goal.activiteit); // 🔥 opnieuw berekenen

        let article = document.createElement("article");

        let p = document.createElement("p");
        p.textContent = goal.titel;

        let progress = document.createElement("progress");
        progress.value = totalDistance;
        progress.max = goal.doel;

        article.appendChild(p);
        article.appendChild(progress);
        progressContainer.appendChild(article);
    });
}


pasteInHtml();

const stat1 = document.querySelector(".stat__1");

let activiteitenLocalStorage = JSON.parse(localStorage.getItem("activities")) || [];
let aantalActiviteiten = activiteitenLocalStorage.length;

stat1.textContent = aantalActiviteiten









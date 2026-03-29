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








// let popupDoel = document.querySelector(".popupDoel")
// let buttonDoel = document.querySelector(".doelBtn")
// let saveDoel = document.querySelector(".saveDoel")
// let progressBars = document.querySelectorAll(".progressBars article")
// let doelen = document.querySelector(".progressBars")
// let titelPopup = document.querySelector(".titelDoel input")
// let doelafstand = document.querySelector(".doelAfstand input")

// buttonDoel.addEventListener("click", function () {
//     popupDoel.classList.remove("hidden")
// });

// saveDoel.addEventListener("click", function () {
//     addProgress()
//     saveDoelToLocalStorage()
// })

// function addProgress() {
//     popupDoel.classList.add("hidden")

//     if (doelen.children.length === 2) {

//         document.querySelector(".error").classList.remove("hidden")
//         console.log("er kunnen er geen meer bij");

//     } else {
//         let activiteitsType = document.querySelector("#doel-Activiteit")

//         let activiteiten = JSON.parse(localStorage.getItem("activities")) || [];

//         let gefilterdeActiviteiten = activiteiten.filter(function (item) {
//             return item.activiteit === activiteitsType.value
//         })

//         let totaleAfstand = gefilterdeActiviteiten.reduce(function (totaal, activiteit) {
//             return totaal + Number(activiteit.afstand)
//         }, 0);

//         let article = document.createElement("article");
//         doelen.appendChild(article)

//         let p = document.createElement("p")
//         article.appendChild(p)
//         p.textContent = titelPopup.value;

//         let progress = document.createElement("progress")
//         article.appendChild(progress)

//         console.log(totaleAfstand) // -> deze op 100 zetten
//         console.log(doelafstand.value) // -> deze vergelijken met totaleAfstand op 100

//         let doel = Number(doelafstand.value) // doel omzetten naar number

//         let percentage = (totaleAfstand / doel) * 100 //hoeveel procent van doel al bereikt

//         progress.value = percentage;
//         progress.max = doel
//     }
// }

// function saveDoelToLocalStorage() {
    
// }

// function updateProgress() {

// }


// // <article>
// //      <p>2000km lopen dit jaar</p>
// //      <progress value="30" max="100"></progress>
// // </article>





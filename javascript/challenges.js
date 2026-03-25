//datum opvragen
const datum = new Date();
const vandaag = datum.getDate()

let dagenSpan = document.querySelectorAll(".dagen span")
//door alle dagen lopen en stoppen bij de dag die matcht met vandaag, classList toevoegen
dagenSpan.forEach(dag => {
    let index = parseInt(dag.getAttribute("data-index")); //omzetten naar number ipv string

    if (index === vandaag) {
        dag.classList.add("current-day")
    }
});

const dagen = document.querySelector(".dagen");
//dagen aanspreken bij klik
dagen.addEventListener("click", function (e) {
    const span = e.target.closest("span"); //voorkom klikbare achtergrond met closest

    //check of het een span is
    if (!span) return;

    //check of de dag voor vandaag ligt (toekomst kan je nog ni weten)
    const index = parseInt(span.dataset.index);
    if (index >= vandaag) return;

    //classLists toevoegen
    if (!span.classList.contains("succeeded")) {
        span.classList.add("succeeded");
        span.classList.remove("failed");
    } else {
        span.classList.remove("succeeded");
        span.classList.add("failed");
    }

    //aantal succes- en faildagen toevoegen
    let aantalSucceeded = 0; //bijhouden hoeveel groen
    let aantalFailed = 0; //bijhouden hoeveel rood

    dagenSpan.forEach(dag => {
        if (dag.classList.contains("failed")) {
            aantalFailed++
        } else if (dag.classList.contains("succeeded")) {
            aantalSucceeded++
        }
    });


    let totaalSucceeded = document.querySelector(".totaalSucceeded");
    totaalSucceeded.textContent = aantalSucceeded

    let totaalFailed = document.querySelector(".totaalFailed");
    totaalFailed.textContent = aantalFailed

    // console.log("failed:", aantalFailed, "succeeded", aantalSucceeded)
});

let challenges = [
    "Loop 3 km zonder te stoppen",
    "Fiets 10 km op stevig tempo",
    "Wandel 10.000 stappen op een dag",
    "Loop 2 km zo snel mogelijk",
    "Fiets 20 minuten zonder pauze",
    "Wandel 5 km zonder te stoppen",
    "Loop in totaal 100 hoogtemeters",
    "Fiets 15 km in één rit",
    "Loop intervals: 1 min snel, 1 min rustig (10x)",
    "Wandel 30 minuten in hoog tempo"
];

// seconden toevoegen aan aftelklok voor quote
let seconden = document.querySelector(".seconden")
let timer = 10
let randomIndex = 0

const opgeslagenChallenge = localStorage.getItem("challenge");
const opgeslagenDate = localStorage.getItem("challengeDatum");
const opgeslagenVoltooid = localStorage.getItem("voltooid");

const challengeVandaag = new Date().toISOString().split("T")[0];

if (opgeslagenChallenge && opgeslagenDate === challengeVandaag) {
    let challenge = localStorage.getItem("challenge")
    document.querySelector(".challenges h1").textContent = challenge

    if (opgeslagenVoltooid === "yes") {
        document.querySelector(".challenges h1").style.textDecoration = "line-through";
        document.querySelector(".current-day").style.background = "darkgreen"
    }
} else {
    let countdown = setInterval(() => {
        if (timer > 0) {
            timer--
        } else {
            clearInterval(countdown) //stop countdown

            randomIndex = Math.floor(Math.random() * challenges.length) //random getal zoeken
            document.querySelector(".challenges h1").textContent = challenges[randomIndex] //random getal toevoegen aan challenge
            localStorage.setItem("challenge", challenges[randomIndex]); // challenge opslagen in local storage
            localStorage.setItem("challengeDatum", challengeVandaag);
            localStorage.removeItem("voltooid")
        }
        seconden.textContent = timer
    }, 1000);
}

let btn = document.querySelector(".challenges button");

btn.addEventListener("click", function () {
    localStorage.setItem("voltooid", "yes")
    document.querySelector(".challenges h1").style.textDecoration = "line-through";
    document.querySelector(".current-day").style.background = "darkgreen"
});



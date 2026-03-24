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

let countdown = setInterval(() => {
    if (timer > 0) {
        timer--
    } else {
        clearInterval(countdown)
        // console.log("toon random challenge")
        randomIndex = Math.floor(Math.random() * challenges.length)
        console.log(challenges[randomIndex])
        document.querySelector(".challenges h1").textContent = challenges[randomIndex]
    }
    seconden.textContent = timer
}, 1000);


const datum = new Date();
const vandaag = datum.getDate()

let dagenSpan = document.querySelectorAll(".dagen span")

dagenSpan.forEach(dag => {
    let index = parseInt(dag.getAttribute("data-index")); //omzetten naar number ipv string

    if (index === vandaag) {
        dag.classList.add("current-day")
    }
});

let seconden = document.querySelector(".seconden")
let timer = 10

let countdown = setInterval(() => {
    if (timer > 0) {
        timer--
    } else {
        // console.log("toon random challenge")
    }
    seconden.textContent = timer
}, 1000);

const dagen = document.querySelector(".dagen");

dagen.addEventListener("click", function (e) {
    let aantalSucceeded = 0;
    let aantalFailed = 0;

    const span = e.target.closest("span"); //voorkom klikbare achtergrond

    //check of het een span is
    if (!span) return;

    //check of de dag voor vandaag ligt (toekomst kan nog ni weten)
    const index = parseInt(span.dataset.index);
    if (index >= vandaag) return;
    if (!span.classList.contains("succeeded")) {
        span.classList.add("succeeded");
        span.classList.remove("failed");
    } else {
        span.classList.remove("succeeded");
        span.classList.add("failed");
    }

    dagenSpan.forEach(dag => {
        if (dag.classList.contains("failed")) {
            aantalFailed++
        } else if (dag.classList.contains("succeeded")) {
            aantalSucceeded++
        }
    });

    let totaalSucceeded = document.querySelector(".totaalSucceeded");
    let totaalFailed = document.querySelector(".totaalFailed");

    totaalFailed.textContent = aantalFailed
    totaalSucceeded.textContent = aantalSucceeded

    console.log("failed:", aantalFailed, "succeeded", aantalSucceeded)
});


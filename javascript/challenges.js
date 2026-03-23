const datum = new Date();
const vandaag = datum.getDate()

let dagen = document.querySelectorAll(".dagen span")

dagen.forEach(dag => {
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
        console.log("toon random challenge")
    }
    seconden.textContent = timer
}, 1000);
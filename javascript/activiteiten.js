
getFromLocalStorage()

function getFromLocalStorage() {
    let activiteiten = JSON.parse(localStorage.getItem("activities")) || []
    let divActiviteiten = document.querySelector(".activiteiten")

    // Maak de container eerst leeg voor geen dubbele rijen 
    divActiviteiten.innerHTML = ""

    activiteiten.forEach((a, i) => {
        let tr = document.createElement("tr")
        divActiviteiten.appendChild(tr)

        let tdIndex = document.createElement("td")
        tr.appendChild(tdIndex)
        tdIndex.textContent = i+1

        let tdTitel = document.createElement("td")
        tr.appendChild(tdTitel);
        tdTitel.textContent = a.titel

        let tdDatum = document.createElement("td")
        tr.appendChild(tdDatum);
        tdDatum.textContent = a.datum


        let tdAfstand = document.createElement("td")
        tr.appendChild(tdAfstand);
        tdAfstand.textContent = a.afstand + " km"


        let tdTijd = document.createElement("td")
        tr.appendChild(tdTijd);
        tdTijd.textContent = a.tijd


        let tdSnelheid = document.createElement("td")
        tr.appendChild(tdSnelheid);
        tdSnelheid.textContent = a.snelheid + " km/u"


        let tdButton = document.createElement("td")
        let button = document.createElement("button")
        tr.appendChild(tdButton)
        tdButton.appendChild(button)
        button.dataset.index = i
        button.textContent = "verwijderen"

        button.addEventListener("click", deleteActivity)

    });
}

function deleteActivity(e) {
    let index = e.target.dataset.index
    let activiteiten = JSON.parse(localStorage.getItem("activities")) || []

    // verwijder het item uit de array
    activiteiten.splice(index, 1)

    // sla de nieuwe vorm (zonder verwijderde activiteit) terug op
    localStorage.setItem("activities", JSON.stringify(activiteiten))

    getFromLocalStorage() //opnieuw alles laten updaten
}
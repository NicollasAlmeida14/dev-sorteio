const drawButton = document.querySelector(".draw-button")

function gernerateNumber() {
    const min = Math.ceil(document.querySelector(".min-input").value)
    const max = Math.floor(document.querySelector(".max-input").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    const resultInput = document.querySelector(".result-input")
    const inputResultContainer = document.querySelector("#result-input-container")

    if (min < max) {
        resultInput.value = result
        inputResultContainer.classList.remove("hidden")
    } else {
        alert('O valor mínimo deve ser Menor que o valor máximo')
        inputResultContainer.classList.add("hidden")
    }
}

    drawButton.addEventListener("click", gernerateNumber)
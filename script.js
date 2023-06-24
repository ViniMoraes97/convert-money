const convertButton = document.querySelector(".convert-button") /* Aqui você vai precisar criar uma variavel, logo após precisa documentar para pegar a classe ou ID no HTML*/
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value /* Aqui você vai precisar criar uma variavel, logo após documentar para pegar a classe ou id no HTML. DETALHE TEM QUE SER TIPO VALUE PRA PEGAR O VALOR.*/

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") /* Aqui foi feito uma variavel, logo apos documentar para pegar a classe ou id no html */

    const currencyValueConvert = document.querySelector(".currency-value") /* Aqui foi feito uma variavel, logo apos documentar para pegar a classe ou id no html*/

    const dolarToday = 4.78 /* Aqui você vai precisar criar uma variavel e ver quanto estar dolar do dia*/

    const libraToday = 6.08

    const bitcoinToday = 146.966

    const euroToday = 5.23

    if (currencySelect.value == "dolar") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("un-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoins") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoins") {
        currencyName.innerHTML = "Bitcoins"
        currencyImage.src = "./assets/bitcoin.png"
    }


    convertValues()

}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) /* Aqui você vai precisar usar a variavel que foi criado, logo após usar essa ferramenta, toda vez que tiver alguma interação ele vai ser chamado. */
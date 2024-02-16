const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectTop = document.querySelector(".currency-select-top")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolartoday = 5.51
    const euroToday = 5.35
    const libraToday = 6.15 
    const realToday = 5.20
    const bitcoinToday = 256.879

    // moedas convertidas //


    if (currencySelect.value == "dolar-2") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolartoday)
    }

    if (currencySelect.value == "euro-2") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra-2") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: 'currency',
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)


    }

    if(currencySelect.value == "bitcoin-2"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency:"BTC"
        }).format(inputCurrency / bitcoinToday);
        }

    // moedas a converter // 
    if (currencySelectTop.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }

    if (currencySelectTop.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }


    if (currencySelectTop.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    }

    if (currencySelectTop.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    }

    if(currencySelectTop.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency:"BTC"
        }).format(inputCurrency);
        }

}






function changeCurrency() {
    const currencyName1 = document.getElementById("currency-name1");
    const currencyImage = document.querySelector(".currency-image");
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    if (currencySelect.value == "dolar-2") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImg.src = "./assets/dolar.png"
    }

    else if (currencySelect.value == "euro-2") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/euro.png"
    }

    else if (currencySelect.value == "real-2") {
        currencyName.innerHTML = "Real";
        currencyImg.src = "./assets/real.png"
    }

    else if (currencySelect.value == "libra-2") {
        currencyName.innerHTML = "Libra";
        currencyImg.src = "./assets/libra 1.png"
    }

    else if (currencySelect.value == "bitcoin-2") {
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src = "./assets/bitcoin 1.png"
    }
    

    if (currencySelectTop.value == "dolar") {
        currencyName1.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/dolar.png"
    }

    else if (currencySelectTop.value == "euro") {
        currencyName1.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png"
    }


    else if (currencySelectTop.value == "libra") {
        currencyName1.innerHTML = "Libra";
        currencyImage.src = "./assets/libra 1.png"
    }

    else if (currencySelectTop.value == "bitcoin") {
        currencyName1.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    else if (currencySelectTop.value == "real") {
        currencyName1.innerHTML = "Real";
        currencyImage.src = "./assets/real.png"
    }





}
currencySelect.addEventListener("change", function () {
    changeCurrency();
    convertValues();
})
currencySelectTop.addEventListener("change", function () {
    changeCurrency();
    convertValues();

    convertButton.addEventListener("click", convertValues);
        convertValues();
})
    

        

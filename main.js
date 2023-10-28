const api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromDropDown = document.querySelector('#from-currency-select');
const toDropDown = document.querySelector('#to-currency-select');

let result = document.getElementById('result');

currencies.forEach((currency)=> {
    const option = document.createElement('option')
    option.value = currency
    option.text = currency
    fromDropDown.add(option)
})
currencies.forEach((currency)=> {
    const option = document.createElement('option')
    option.value = currency
    option.text = currency
    toDropDown.add(option)
})
fromDropDown.value = 'USD'
toDropDown.value = 'UZS'

let convertCurreny = () => {
    const amout = document.querySelector('#amount').value;
    const fromCureency = fromDropDown.value;
    const toCureency = toDropDown.value;

    if(amout.length != 0){
       fetch(api)
       .then((response) => response.json())
       .then((data) => {

        let fromExchangeRate = data.conversion_rates[fromCureency]
        let toExchangeRate = data.conversion_rates[toCureency]

        const convertedAmount = (amout / fromExchangeRate)* toExchangeRate
        result.innerHTML = `${amout} ${fromCureency} = ${convertedAmount.toFixed
        (2)}${toCureency}`
        
       })

    }
}
document.getElementById('convert-buuton').addEventListener('click', convertCurreny);
window.addEventListener('click', convertCurreny)

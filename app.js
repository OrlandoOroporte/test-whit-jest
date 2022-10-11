console.log("Hello Word")

const sum = (a,b) => {
    return a+b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


let fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

let fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar* 127.9)/1.2
    return valueInYen
}

let fromYenToPound = function(valueInYen){
    let valueInPound = (valueInYen * 0.8)/127.9
    return valueInPound
}

module.exports={ fromEuroToDollar, fromDollarToYen, fromYenToPound };
let celsiusInput = document.querySelector('#celsius > input')
let  fahrenhietInput = document.querySelector('#Fahrenheit > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32

    fahrenhietInput.value = roundNumber(fTemp)
})

fahrenhietInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenhietInput.value)
    let cTemp = (fTemp -32)*(5/9)

    celsiusInput.value = roundNumber(cTemp)
})


btn.addEventListener('click', ()=>{
    celsiusInput.value=""
    fahrenhietInput.value=""
})
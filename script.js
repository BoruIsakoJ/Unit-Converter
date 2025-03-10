/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-num")
let meterEl = document.getElementById("meter-convertor")
let volumeEl = document.getElementById("volume-convertor")
let massEl = document.getElementById("mass-convertor")
let convertBtn = document.getElementById("convert-btn")

let inputVal =0
function calculateLength() {
    let inputVal = parseFloat(inputEl.value)
    //console.log(inputVal)
    let meterToFeet = (inputVal * 3.281).toFixed(3)
    let feetToMeter = (inputVal / 3.281).toFixed(3)

    meterEl.textContent = `${inputVal} meters = ${meterToFeet} feet | ${inputVal} feet =  ${feetToMeter} meters`
}
function calculateVolume(){
    let inputVal = parseFloat(inputEl.value)
    let literToGallon = (inputVal* 0.264).toFixed(3)
    let gallonToLiter = (inputVal/0.264).toFixed(3)

    volumeEl.textContent = `${inputVal} liters = ${literToGallon} gallons | ${inputVal} gallons =  ${gallonToLiter} liters`
}
function calculateMass(){
    let inputVal = parseFloat(inputEl.value)
    let kilogramToPound = (inputVal* 2.204).toFixed(3)
    let poundToKilogram = (inputVal/2.204).toFixed(3)

    massEl.textContent = `${inputVal} kilos = ${kilogramToPound} pound | ${inputVal} pound =  ${poundToKilogram} mass`
}
function allOperations(){
    calculateMass()
    calculateVolume()
    calculateLength()
}

convertBtn.addEventListener('click', allOperations)

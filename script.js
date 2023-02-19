const screen = document.getElementById("calculation")
const buttons = document.querySelectorAll("button")

let calculation = []
let acuCalculation

function calculate(button){
    const value = button.textContent

    if(value === "AC"){
        calculation = []
        screen.textContent = "0"
    }
    else if(value === "="){
        screen.textContent = eval(acuCalculation)
    }
    else if(value === "%"){
        
    }
    else{
        calculation.push(value)
        acuCalculation = calculation.join('')
        screen.textContent = acuCalculation
    }

}
buttons.forEach(button => button.addEventListener("click", () => calculate(button)))
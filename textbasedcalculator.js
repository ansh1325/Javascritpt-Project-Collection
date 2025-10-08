const prompt= require("prompt-sync")()
let num1
let num2
while (true){
    
num1= parseFloat(prompt("enter number 1 "))
num2= parseFloat(prompt("Enter num2 "))
if (isNaN(num1) || isNaN(num2)){
    console.log("Invalid Input")
}else{
    break
}
}

var operator=prompt("Enter the operator ")

let result
let valid= true

switch(operator){
    case "+":
        result=num1 + num2
        break
    case "-":
        result=num1 - num2
        break
    case "*":
    case "x":
        result=num1 * num2
        break
    case "/":
        result=num1 / num2
        break
    default:
        valid = false
        console.log("Not valid operator")
}

valid ? console.log(num1,operator,num2,"= ", result):console.log("use some this like + - * x /")
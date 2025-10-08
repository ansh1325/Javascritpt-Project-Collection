const prompt= require('prompt-sync')()
var username= prompt("what is your name ")

console.log(`Hello ${username} welcome to our adventure game`)

var weplay= prompt("Do you want to play ")
if (weplay.toLowerCase()=="yes"){
    let leftorright= prompt("Do you want to go left or right ")
    if (leftorright.toLowerCase()==="left"){
        console.log("now you see a bridge")
        let cross=prompt("Do you want to cross the bridge yes or no")
        if(cross.toLowerCase()==="yes"){
            console.log("You cross bridge was too weak it broke and you fell")
        }
        else{
            console.log("Good Choice")
        }
    }
    else{
        console.log("You go right and fall from a bridge")
    }
} else if (weplay.toLowerCase().toLowerCase()=="no"){
    console.log("okay :(")
} else{
    console.log("Invalid Input....")
}

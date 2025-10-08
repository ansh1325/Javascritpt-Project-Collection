const prompt =require("prompt-sync")()
const fs=require("fs")
function loadquestions(){
    try{
        let data= fs.readFileSync("questions.json","utf8")
        let questions=JSON.parse(data).questions
        return questions

    }catch(e){
        console.log("Some Error occured",e)
    }
}
function askquestion(question){
    console.log(question.question)
    for(let i=0;i<question.options.length;i++){
        console.log(`${i+1} ${question.options[i]}`)
    }
    let choice=parseInt(prompt("Enter the option "))
    if(isNaN(choice)|| choice>question.options.length || choice<1){console.log("not a valid option"); return false}
    let choicevalue=question.options[choice-1]
    if (choicevalue==question.answer) return true
}
function getrandomquestions(questions,numberofques){
    if(numberofques>questions.length){
        numberofques=questions.length
    }
    let shuffled=questions.sort(()=>{
        return 0.5 - Math.random()
    })
    return shuffled.slice(0,numberofques)
}
let numberofques=parseInt(prompt("Number of question you want to answer"))
let questions=loadquestions()
let randomques=getrandomquestions(questions,numberofques)
let correct=0
let starttime=Date.now()
for(let question of randomques){
    const iscorrect=askquestion(question)
    console.log()
    if(iscorrect) correct++
}
let totaltime=(Date.now()-starttime)/1000
console.log("CORRECT: ", correct)
console.log("TIME TAKEN:", totaltime)
console.log("SCORE: " ,((correct/numberofques)*100)+"%")

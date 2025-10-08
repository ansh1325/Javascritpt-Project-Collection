const prompt = require("prompt-sync")()

function info(){
    console.log("Welcome to contact management System")
    console.log("Choose what you want to do")
    console.log("1 to add contact")
    console.log("2 to delete contact")
    console.log("3 to view contact")
    console.log("4 to search contact")
    console.log("5 to exit contact management System")
}
info()
const contacts=[]
let keepgoing = true
function addcontact(){
    let name=prompt("name of contact ")
    let email=prompt("Email of contact ")
    let contact={
        "name": name,
        "email": email
    }
    contacts.push(contact)
    console.log("added")
}

function deletecontact(){
    if (contacts.length===0){
        console.log("No contacts to delete")
        return
    }
    for (let i = 0; i < contacts.length; i++) {
        const contact_to_delete=contacts[i]
        console.log(`${(i+1).toString()} name: ${contact_to_delete.name} email: ${contact_to_delete.email}`)
        
    }
    const id=parseInt(prompt("ENTER ID "))
    if(isNaN(id)|| id>contacts.length || id<1) {console.log("Invalid")} else {contacts.splice((id-1),1); console.log("Removed")}
}

function viewcontact(contacts){
    
    for (let i of contacts) {
        console.log(`name: ${i.name} email: ${i.email}`)
        
    }
}

function searchcontact(){
    let searchterm= prompt("Enter the name of contact you want to search ").toLowerCase()
    let results=[]
    for(let contact of contacts){
        if(contact.name.toLowerCase().includes(searchterm)) results.push(contact)
    }
viewcontact(results)

}


while(keepgoing){
    var toperform= prompt("what you want to do ")
    switch(toperform){
        case "1":
            addcontact()
            break
        case "2":
            deletecontact()
            break
        case "3":
            viewcontact(contacts)
            break
        case "4":
            searchcontact()
            break
        case "5":
            keepgoing=false
            console.log("Exitting Contact Management System")
            break
        default:
            console.log("please enter some valid options")
    }
}
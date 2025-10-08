const fs= require("fs")
const path =require("path")
const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


rl.question("PASTE THE PATH OF FOLDER YOU WANT TO ORGANIZE ",(folderpath)=>{
    try{
        // folderpath="C:\Users\Hp\Downloads\data-science-roadmap-2024.zip"
let files= fs.readdirSync(folderpath)
// console.log(files)
files.forEach(file=>{
    let extension = path.extname(file).slice(1)
    // console.log(file,"=>",extension)
    if (extension){
        let extensionfolder=path.join(folderpath,extension)
        // console.log(extensionfolder)
        if(!fs.existsSync(extensionfolder)){
            fs.mkdirSync(extensionfolder)
            // console.log("folder created")
        }
        let oldpath=path.join(folderpath,file)
        // console.log(oldpath)
        let newpath=path.join(extensionfolder,file)
        // console.log(newpath)
        fs.renameSync(oldpath,newpath)
    }

})

    }
    catch(err){
        console.error("ERROR OCCURED",err.message)
    }
    finally{
        rl.close()
        console.log("folder sorted according extensions")
    }
})

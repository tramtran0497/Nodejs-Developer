const fs = require("fs");
const { default: chalk } = require("chalk");

const addNote = (title, author) => {
    const notes = loadNotes()
    // checking title
    const duplicatedNote = notes.find(note => note.title === title)
    // it returns an array with duplicated note
    if(!duplicatedNote){
        // Have no duplicated
        // adding obj in an empty array
        notes.push({
            title: title,
            author: author,
        })
        // save note!
        saveNotes(notes)
        const command = chalk.green.bold("Adding New Notes")
        console.log(command)
    } else{
        const command = chalk.red.bold("Note is already existed")
        console.log(command)
    }
}

const loadNotes = () => {
     // this func is used for loading data JSON from file name notes.json
    try{
        const notesBuffer = fs.readFileSync("notes.json")
        const notesJSON = notesBuffer.toString()
        // convert JSON string to js obj
        return JSON.parse(notesJSON)
    } catch(err){
        // if have no finding the note.json file, return empty array
        return []
    }
}

const saveNotes = (newNotes) => {
    const notesJSON = JSON.stringify(newNotes)
    fs.writeFileSync("notes.json", notesJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    // checking book exists in an array or not
    const existBook = notes.find(note => note.title === title)
    // if existing, remove
    if(existBook){
        const index = notes.indexOf(existBook)
        notes.splice(index, 1)
        saveNotes(notes)
        const command = chalk.green.bold("Removing the note")
        console.log(command)
    } else{
        const command = chalk.red.bold("You should add before removing this book!")
        console.log(command)
    }
}

module.exports = {
    addNote,
    removeNote
};
const fs = require("fs");

const addNote = (title, author) => {
    const notes = loadNotes()
    // adding obj in an empty array
    notes.push({
        title: title,
        author: author,
    })
    // save note!
    saveNotes(notes)
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

module.exports = addNote;
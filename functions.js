const addNote = (title, author) => {
    
}

const loadNote = () => {
    // this func is used for loading data JSON from file name notes.json
    const noteBuffer = fs.readFileSync("notes.json")
    const noteJSON = bookBuffer.toString()
    // convert JSON string to js obj
    const note = JSON.parse(noteJSON)
}

module.exports = addNote;
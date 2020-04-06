const fs = require('fs');

var getNote = () => {
return JSON.parse(fs.readFileSync('notes.txt'))
}

var addingNote = (title , body) => {
var notes = getNote()
var note = {
title,
body
}
notes.push(note)

fs.writeFileSync('notes.txt',JSON.stringify(notes))
}

var removeNote = (title) => {
var notes = getNote()
  var filterednotes =  notes.filter (note => note.title !== title)
  fs.writeFileSync('notes.txt',JSON.stringify(filterednotes))

}

var readNote = (title) => {
    var notes = getNote()
    var readnotes =  notes.filter (note => note.title === title)
  console.log(readnotes)

}

var listNotes = () => {

    var notes = getNote()

 console.log(notes)

}

module.exports = {
    addingNote,
    removeNote,
    readNote,
    listNotes
}
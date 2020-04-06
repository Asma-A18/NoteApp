
const yargs = require('yargs');
const notes = require('./notes');
const argv = yargs.argv


var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];


if (command === 'add') {
  console.log('Note added')
  notes.addingNote(title,body)
 if (notes.title === '') {
    console.log('add a title')
  }
} else if (command === 'remove') {
  console.log('Note removed')
  notes.removeNote(title)

}else if (command === 'read') {
  console.log('Note read')
  notes.readNote(title)

}else if (command === 'list') {
  console.log('Here are all your notes')
  notes.listNotes(title)

} 
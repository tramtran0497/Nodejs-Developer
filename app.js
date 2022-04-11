// const { default: chalk } = require("chalk");
// const msg = chalk.red.bold("Tram")

const addNote = require("./functions")
const yargs = require("yargs")

yargs.command({
    command: 'add',
    describe: 'Adding Book',
    builder: {
        title: {
            describe: 'Adding Title',
            demandOption: true,  // Required
            type: 'string'     
        },
        author: {  
            describe: 'Adding Author',
            demandOption: true,
            type: 'string'
        }
    },
    // Function for your command
    handler: function(argv) {
        addNote(argv.title, argv.author)
    }
})

console.log(yargs.argv)
   
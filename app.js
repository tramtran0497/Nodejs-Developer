// const { default: chalk } = require("chalk");
// const msg = chalk.red.bold("Tram")

const noteFuncs = require("./functions")
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
    handler: (argv) => {
        noteFuncs.addNote(argv.title, argv.author)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing Book',
    builder: {
        title: {
            describe: 'Typing Title',
            demandOption: true,  // Required
            type: 'string'     
        },
        author: {  
            describe: 'Typing Author',
            demandOption: true,
            type: 'string'
        }
    },
    // Function for your command
    handler: (argv) => {
        noteFuncs.removeNote(argv.title)
    }
})

console.log(yargs.argv)
   
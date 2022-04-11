// const { default: chalk } = require("chalk");
// const msg = chalk.red.bold("Tram")

// const yargs = require("yargs")
// console.log(yargs.argv)

// js Obj - JSON string
const book = {
    title: "ABC",
    author: "Alex"
}
// convert to JSON string: JSON.stringify()
const bookJson = JSON.stringify(book)

// JSON string - js Obj
const fs = require("fs");
// read JSON data from book.json file
const bookBuffer = fs.readFileSync("book.json")
const bookJSON = bookBuffer.toString()
// convert JSON string to js obj
const book1 = JSON.parse(bookJSON)
// change title of book
book1.title = "Red Bear"
const book1Json = JSON.stringify(book1)
fs.writeFileSync("book.json", book1Json)

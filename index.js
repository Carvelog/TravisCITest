//import greeting from "./src/greeting"
const greeting = require("./src/greeting")
const word = process.argv[2];

greeting.print(word)
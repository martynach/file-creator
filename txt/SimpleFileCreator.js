const fs = require("fs");

console.log("***********************************")
console.log("Dirname: ")
console.log(__dirname);
console.log("Filename: ")
console.log(__filename)



const filename = "message.txt";

function WriteFile(message) {
    fs.writeFile(filename, message, function (err) {
        if (err) {
            throw err;
        }
        console.log("File created");
        console.log("***********************************")
    });
}

WriteFile("This text should be inside created file!");




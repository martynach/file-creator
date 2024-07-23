const fs = require("fs");

console.log("***********************************")
console.log("Dirname: ")
console.log(__dirname);
console.log("Filename: ")
console.log(__filename)


function WriteFile(fileName, message) {
    fs.writeFile(fileName, message, function (err) {
        if (err) {
            throw err;
        }
        console.log("File created");
        console.log("***********************************")
    });
}




// CreateFile("This text should be inside created file!");
WriteFile("message.txt", "This text should be inside created file!");




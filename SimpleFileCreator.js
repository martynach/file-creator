const fs = require("fs");

console.log("***********************************")
console.log("Dirname: ")
console.log(__dirname);
console.log("Filename: ")
console.log(__filename)
console.log("***********************************")

if(process.argv.length !== 5) {
    console.error("Variables not provided");
    process.exitCode = 1;
}

if(process.argv.length)
    var index = 0;

console.log("process.argv.length: ", process.argv.length);

while(index <  process.argv.length) {
    console.log(`process.argv[${index}]: ${process.argv[index]}`);
    index++;

}

console.log("***********************************")



function WriteFile(fileName, message) {
    fs.writeFile(fileName, message, function (err) {
        if (err) {
            throw err;
        }
        console.log("File created");
        console.log("***********************************")
    });
}


WriteFile("message.txt", "This text should be inside created file!");




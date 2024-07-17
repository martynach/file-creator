const fs = require("fs");

console.log("***********************************")
console.log("Dirname: ")
console.log(__dirname);
console.log("Filename: ")
console.log(__filename)

const filesDirectory = "../files";

function CreateDirectoryFile(message) {
    fs.mkdir("../files", function(error) {
        if(error) {
            console.log(`ERROR: ${error}`);
            process.exit();
        } else {
            WriteFile(fileName, message);
        }
    })

}

function WriteFile(fileName, message) {
    fs.writeFile(fileName, message, function (err) {
        if (err) {
            throw err;
        }
        console.log("File created");
        console.log("***********************************")
    });
}


function CreateFile() {
    const message = "this is the text that should be inside file."
    if(fs.existsSync(filesDirectory)) {
        WriteFile(message);
    } else {
        CreateDirectoryFile(message);
    }
}

// CreateFile("This text should be inside created file!");
WriteFile("message.txt", "This text should be inside created file!");




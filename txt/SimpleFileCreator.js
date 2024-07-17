const fs = require("fs");



const filename = "message.txt";

function WriteFile(message) {
    fs.writeFile(filename, message, function (err) {
        if (err) {
            throw err;
        }
        console.log("Markdown Created");
        // process.exit();
    });
}

WriteFile("This text should be inside created file!");




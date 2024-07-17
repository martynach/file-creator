const fs = require("fs");



const questions = [
    "What is your name?",
    "What would you like to do?",
    "What's your favourite programming language?"
];

const answers = [];

function ask(index = 0) {
    process.stdout.write(`${questions[index]} > `);
}

process.stdin.on("data", (data) => {
    answers.push(data);

    if (answers.length == questions.length) {
        WriteFile(`\n\nDear ${answers[0]} go ${answers[1]} and finish ${answers[2]} later!`);
    } else {
        ask(answers.length);
    }
})

ask();



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

// WriteFile();





process.on("exit", function() {

    const message = `\n\nDear ${answers[0]} go ${answers[1]} and finish ${answers[2]} later!`;
    WriteFile();
    process.stdout.write(message);

});

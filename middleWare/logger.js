const colors = require("colors");
const fs = require("fs");

function logger (req, res, next) {
    let reqestMethod = {
        GET: "green",
        POST: "yellow",
        PUT: "blue",
        DELETE: "red"
    };
    let start = Date.now();

    res.on("finish", () => {
        let end = Date.now();
        let today = new Date();
        let log = `${today.toLocaleDateString()} - ${req.method} - ${req.originalUrl} ${req.ip} ${res.statusCode} - ${end - start}m/s`;

        console.log(log[reqestMethod[req.method]]);

        fs.appendFile("logFile.txt", `\n${log}`, (err) => {
            if(err) {
                console.log("Error");
            }
        });

    });
    next();

}

module.exports = logger;
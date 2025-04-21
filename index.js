const http = require("http");
const fs = require("fs");
const url = require ("url");

const myServer = http.createServer((req, res) => {
    if (req.url === "/fevicon,ico" ) return res.end();
    const log = `${Date.now()}: ${req.url} New Req Received\n`;


    const myUrl = url.parse(req.url);
    console.log(myUrl);

    fs.appendFile("log.txt", log, (err, data) => {
        

        switch (myUrl.pathname) {
            case '/':
                res.end("HomePage");
                break;
            case '/about':
                res.end("I am Akash Raikwar");
                break;
                case '/about':
                res.end("I am Akash Raikwar About");
                break;
            default:
                res.statusCode = 404;
                res.end("404 Not Found");
        }
    });
});

myServer.listen(5000, () => console.log("Server is running"));

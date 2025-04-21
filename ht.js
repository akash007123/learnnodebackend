const http = require("http");
const fs = require("fs");
const url = require ("url");

const myServer = http.createServer((req, res) => {
    if (req.url === "/fevicon,ico" ) return res.end();
    const log = `${Date.now()}: ${req.url} New Req Received\n`;


    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);

    fs.appendFile("log.txt", log, (err, data) => {
        

        switch (myUrl.pathname) {
            case '/':
                if (req.method === "GET") res.end("You are on Home Page");
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;

                case '/search':
                const search = myUrl.query.search_query;
                res.end("Here are your result for" + search)
                break;

                case '/signup':
                    if (req.method === "GET") res.end("This is the SignUp Form");
                    else if(req.method === "POST");


            default:
                res.statusCode = 404;
                res.end("404 Not Found");
        }
    });
});

myServer.listen(5000, () => console.log("Server is running"));

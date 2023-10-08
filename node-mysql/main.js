const http = require("http");
const host = 'localhost';
const port = 8000;

const books = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);


const server = http.createServer((req, res) => {
    var payload = "";            

    req.on('data', function (data) {
        payload += data;
    });

    req.on('end', () => {
        console.log("Req end")
        console.log(req.method)

        callBack = (err, result) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            var response = {}
            if (err) { 
                response["error"] = err.message;
            } else {
                response["data"] = result; 
            }
            res.write(JSON.stringify(response, null, 4));
            res.end();
        }

        switch (req.method) { 

            case "POST":

                jsonData =  JSON.parse(payload); 

                product.insertRecord(jsonData, callBack);

                break;

            case "PUT": 

                jsonData =  JSON.parse(payload); 

                product.updateRecord(resourceId, jsonData, callBack);

                break;

            case "DELETE": 

                product.deleteRecord(resourceId, callBack);

                break; 

            case "GET":  
               callBack(0,books)
                // product.getRecords(resourceId, callBack); 

                break; 
        }

        // resourceId = httpRequest.resourceId;

    });
    /*
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/books":
            res.writeHead(200);
            res.end(books);
            break
        case "/authors":
            res.writeHead(200);
            res.end(authors);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));

    }
    */

});
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
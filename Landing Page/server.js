/*Resource: https://www.youtube.com/watch?v=_D2w0voFlEk*/

var http = require('http');
const fs = require('fs') //for file handling

//404 response
function send404Response(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404. Page not found!");
    response.end;
}

//Handle a user request
function onRequest(request, response){
    if(request.method == 'GET' && request.url == '/'){
      response.writeHead(200, {"Content-Type": "text/html"});
      console.log("finding homepage");
      fs.createReadStream("home.html").pipe(response);
      console.log("homepage was found and successfully loaded"); //For me, it seems to be struggling to load in all the images and assets.
    }
    else{
      send404Response(response);
    }
}
http.createServer(onRequest).listen(2020); //request Listener. listen(port_number)
console.log("Server is now running....");
console.log("Port is 2020");

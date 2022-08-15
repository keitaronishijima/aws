// // const express = require('express')
// // const app = express()
// // const port = 3000

// // app.get('/', (req, res) => {
// //   res.send('AWS')
// // })

// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`)
// // })

// // Import the necessary modules
// var http = require('http');

// // Server object
// server = {};

// // Start the http server
// server.httpServer = http.createServer(function(req, res){
// /* Stuff */
// })

// // Start the server
// server.httpServer.listen(8080, '35.77.54.64', function(){
//     console.log('The server is listening on port 8081');
// })

let ip = require("ip");
let express = require("express");

const app = express();

const port = Number(process.env.PORT || 80);
const hostname = process.env.HOST || "35.77.54.64";

app.listen(port, hostname, () => {
  const host = ip.address();
  console.log(`ℹ Listening on: http://${host}:${port}`);
});
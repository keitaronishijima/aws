
let ip = require("ip");
let express = require("express");

const app = express();

const port = Number(process.env.PORT || 80);
const hostname = process.env.HOST || "0.0.0.0";

app.listen(port, hostname, () => {
  const host = ip.address();
  console.log(`ℹ Listening on: http://${host}:${port}`);
});
const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");

app.use(express.json());
app.use(cors());

// include router /gaji
app.use("/", require("./routes/gajiRouter"));

// start server
server.listen(4000, function() {
  console.log("server 2 running on localhost:4000");
});

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;
var path = require("path");
// app.use(express.static('public'));
app.get("/", function (req, res) {
  console.log("req.query", req.query);
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.get("/liff-starter.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/liff-starter.js"));
});

app.get("/style.css", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/style.css"));
});
app.get("/send-id", function (req, res) {
  res.json({ id: myLiffId });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));

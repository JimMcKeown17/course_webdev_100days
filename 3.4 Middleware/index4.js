import express from "express";
import bodyParser from "body-parser"

// These next 3 lines get the path name and send back the index.html file
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


// Now I'm using the bodyParser middleware to get the values submitted in the form.
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const bandName = req.body['street'] + req.body['pet']
  res.send(`<h1>Your band name is:</h1><br> ${bandName}`)
})
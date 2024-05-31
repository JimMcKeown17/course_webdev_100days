import express from "express";

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>Hello World! What's happening?</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h3>About Us</h3>")
})

app.get("/contact", (req, res) => {
    res.send("<h2>Contact Us</h2><br><p>My name is Qhawe</p>")
})

app.listen(port, () => {
    console.log(`Servers is up and running at ${port}`)
});


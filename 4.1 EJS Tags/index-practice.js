import express from "express";

const app = express();
const port = 3001;

app.get("/", (res, req) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<strong>This is some strong text</strong>",
      };

    res.render("index.ejs", data);

});


app.listen(port, () => {
    console.log(`Server is running on ${port}.`)
})
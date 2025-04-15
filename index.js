import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
// const ejs = ejs();

var userIsValid = false;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs", {title: "Home"});
});



app.get("/about", (resq, res) => {
    res.render("about.ejs", {title: "About"});
});

app.get("/overview", (resq, res) => {
    res.render("overview.ejs", {title: "Overview"});
});

app.get("/publications", (resq, res) => {
    res.render("publications.ejs", {title: "Publications"});
});

app.get("/people", (resq, res) => {
    res.render("people.ejs", {title: "People"});
});

app.get("/alumni", (resq, res) => {
    res.render("alumni.ejs", {title: "Alumni"});
});

app.get("/join", (resq, res) => {
    res.render("join.ejs", {title: "Join"});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

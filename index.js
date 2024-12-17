const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = 5000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use("/asset", express.static(path.join(__dirname, "./asset")));

hbs.registerPartials(__dirname + "/views/partials", function (err) { });

app.get("/", (req, res) => {
  // res.send(`Welcome Ferdian`);
  res.render("index");
});

app.get("/myproject", (req, res) => {
  res.render("myproject");
});

app.get("/testimonial", (req, res) => {
  res.render("testimonial");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});



app.get("/blog", (req, res) => {
  res.render(`blog`);
});

app.get("/blog-detail", (req, res) => {
  res.render(`blog`);
});


app.get("/:lang/project/:id", (req, res) => {
  const { id, lang } = req.params;
  const { name, tittle } = req.query;

  let textToRender = "";
  if (lang === "id") {
    textToRender = `Halaman Project dengan ID : ${id}; author : ${name};tittle : ${tittle}`;
  } else {
    textToRender = `Project page with ID : ${id}; author : ${name};tittle : ${tittle}`;
  }
  res.send(textToRender);
});


// app.get("*", (req, res) => {
//   res.send(`halaman ini tidak ada`);
// });


app.listen(port, () => {
  console.log(`server berjalan ${port}`);
});

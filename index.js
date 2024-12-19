const express = require("express");
var methodOverride = require("method-override");
const path = require("path");
const hbs = require("hbs");
const {
  renderHome,
  renderContact,
  renderMyproject,
  renderCreatemyproject,
  renderProjectDetail,
  renderProjectEdit,
  updateProject,
  renderTestimonial,
  renderBlog,
  addProject,
  delProject,

  render404,
} = require("./controllers/controller");

const {
  formatDataToWIB,
  getRelativeTime,
  getDuring,
} = require("./utils/time.js");

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use("/asset", express.static(path.join(__dirname, "./asset")));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});
hbs.registerHelper("getRelativeTime", getRelativeTime);
hbs.registerHelper("formatDataToWIB", formatDataToWIB);
hbs.registerHelper("getDuring", getDuring);
hbs.registerHelper("equal", function (a, b) {
  return a === b;
});

app.get("/", renderHome);
app.get("/testimonial", renderTestimonial);
app.get("/myproject", renderMyproject);
app.get("/createmyproject", renderCreatemyproject);
app.get("/project-edit/:index", renderProjectEdit);
app.patch("/project-update:index", updateProject);

app.delete("/delete-project:index", delProject);
app.get("/project-detail/:index", renderProjectDetail);
app.get("/contact", renderContact);
app.get("/blog", renderBlog);
app.get("/blog-detail", renderBlog);
app.post("/myproject", addProject);

// app.get("*", render404);

// app.get("/:lang/project/:id", (req, res) => {
//   const { id, lang } = req.params;
//   const { name, tittle } = req.query;

//   let textToRender = "";
//   if (lang === "id") {
//     textToRender = `Halaman Project dengan ID : ${id}; author : ${name};tittle : ${tittle}`;
//   } else {
//     textToRender = `Project page with ID : ${id}; author : ${name};tittle : ${tittle}`;
//   }
//   res.send(textToRender);
// });

app.listen(port, () => {
  console.log(`server berjalan ${port}`);
});

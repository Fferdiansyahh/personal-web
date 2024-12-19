let blogs = [
  {
    author: "Ferdian",
    name: "web 1",
    message:  "Morbi convallis egestas ultraicies. Phasellus sed volutpat nisi. Vivamus ultrices tellus id mattis sollicitudin. Vivamus risus lorem, molestie id mauris ut, faucibus cursus nunc. Pellentesque vulputate lectus ac accumsan sagittis. Vivamus posuere lectus rutrum nisi ullamcorper dictum. Maecenas sagittis purus nec ipsum imperdiet elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget lobortis est. Nunc tempor lectus eu dui consequat suscipit.",
      
    sdate: 2024 - 12 - 1,
    edate: 2024 - 12 - 18,
    technologies: ["nodejs", "typescript"],
    postedAt: new Date(),
    postedAtFormatted: "18 Des 2024 21:37 WIB",
  },
  {
    author: "Ferdian",
    name: "web ",
    message: "delete-project delete-project",
    sdate: 2024 - 12 - 1,
    edate: 2024 - 12 - 18,
    technologies: ["nodejs", "typescript"],
    postedAt: new Date(),
    postedAtFormatted: "18 Des 2024 21:37 WIB",
  },
];

const { formatDataToWIB } = require("../utils/time");

function renderHome(req, res) {
  res.render("index");
}

//my project
function renderMyproject(req, res) {
  const objectToSend = {
    blogs: blogs,
  };
  res.render("myproject", objectToSend);
}

function renderCreatemyproject(req, res) {
  res.render("createmyproject");
}

function updateProject(req, res) {
  const index = req.params.index;
  const { name, message, technologies, sdate, edate } = req.body;

  let updatedProject = {
    author: "Ferdian",
    name: name,
    message: message,
    sdate: new Date(sdate),
    edate: new Date(edate),
    // image: image,
    technologies: technologies,
    postedAt: new Date(),
    postedAtFormatted: formatDataToWIB(new Date()),
  };

  blogs[index] = updatedProject;

  res.redirect("myproject");
}

function renderProjectEdit(req, res) {
  const index = req.params.index;
  const dataToEdit = blogs[index];
  res.render("project-edit", { data: dataToEdit, index: index });
}

function renderProjectDetail(req, res) {
  const index = req.params.index;
  const dataToEdit = blogs[index];
  res.render("project-detail", { data: dataToEdit, index: index });
}

function delProject(req, res) {
  const index = req.params.index;
  const dataToDelete = blogs[index];
  blogs.splice(index, 1);
  console.log("Data yang mau di hapus", dataToDelete);
  res.redirect("myproject");
}

function addProject(req, res) {
  const { name, message, technologies, sdate, edate } = req.body;

  let blog = {
    author: "Ferdian",
    name: name,
    message: message,
    sdate: new Date(sdate),
    edate: new Date(edate),
    // image: image,
    technologies: technologies,
    postedAt: new Date(),
    postedAtFormatted: formatDataToWIB(new Date()),
  };

  blogs.push(blog);
  console.log(blogs);

  res.redirect("myproject");
}

// tesimonial
function renderTestimonial(req, res) {
  res.render("testimonial");
}
function renderContact(req, res) {
  res.render("contact");
}
function renderBlog(req, res) {
  res.render("blog");
}
function render404(req, res) {
  res.render("Halaman ini tidak ada");
}

module.exports = {
  renderHome,
  renderMyproject,
  renderCreatemyproject,
  renderProjectDetail,
  renderProjectEdit,
  updateProject,
  renderTestimonial,
  renderContact,
  renderBlog,
  render404,
  addProject,
  delProject,
};

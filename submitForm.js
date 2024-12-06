let blogs = []; // length nya adalah 0

function addBlog(e) {
    e.preventDefault();

    let projectname = document.getElementById("project-name").value;
    let message = document.getElementById("your-message").value;
    let ds = document.getElementById("start-date").value;
    let de = document.getElementById("end-date").value;
    let imageInput = document.getElementById("upload-image");


    var dt1 = new Date(ds);
    var dt2 = new Date(de);
    var diff = dt2.getTime() - dt1.getTime();
    var days = (diff / (1000 * 60 * 60 * 24));
    var month = (days / 30).toFixed(1);



    if (projectname == "" || message == "" || days == "" || month == "" || imageInput.files.length === 0) {
        return alert("All input fields cannot be empty");
    }

    let image = URL.createObjectURL(imageInput.files[0]);

    let blog = {
        author: "Ferdian",
        projectname: projectname,
        message: message,
        days: days,
        month: month,
        image: image,
        postedAt: new Date(),
    };

    blogs.push(blog);

    renderBlog();
}

function renderBlog() {
    console.log(blogs);

    let blogListElement = document.getElementById("blogList");

    blogListElement.innerHTML = firstBlogContent();

    for (let i = 0; i < blogs.length; i++) {
        // menampilkan blogs yang sudah kita buat dengan mengisi form
        console.log(blogs[i]);

        blogListElement.innerHTML += `    
        <div id="${i}" class="blog-list-item">
          <div class="blog-image-title">
            <div class="blog-image">
              <img src="${blogs[i].image}" alt="blog-image" />
            </div>
            <div>
              <p>
                <a href="blog-detail.html" class="blog-item-title">
                   ${blogs[i].projectname}
                </a>
              </p>
              <div>
                <p class="detail-blog-content"> durasi : ${blogs[i].days} hari </p>
              </div>
            </div>
          </div>
          <div>
            <p class="blog-text">
            ${blogs[i].message}
            </p>
          </div>
          <div>
            <img class="blog-icon" src="./Asset/play.png" alt="Logo Play Store "></img>
            <img class="blog-icon" src="./Asset/andro.png" alt="Logo Android "></img>
            <img class="blog-icon" src="./Asset/java.png" alt="Logo Java "></img>
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
          </div>
       
    `;
    }
}

function firstBlogContent() {
    return `
       <div class="blog-list-item">
          <div class="blog-image-title">
            <div class="blog-image">
              <img src="./Asset/blog-img.png" alt="blog-image" />
            </div>
            <div>
              <p>
                <a href="blog-detail.html" class="blog-item-title">
                  Pasar Coding di Indonesia Masih Menjanjikan
                </a>
              </p>
              <div>
                <p class="detail-blog-content"> durasi : 3 bulan </p>
              </div>
            </div>
          </div>
          <div>
            <p class="blog-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              explicabo totam labore sit tempore, voluptate vitae nesciunt in
              maiores rerum, vero veritatis numquam iure aut sunt nemo.
            </p>
          </div>
          <div>
            <img class="blog-icon" src="./Asset/play.png" alt="Logo Play Store "></img>
            <img class="blog-icon" src="./Asset/andro.png" alt="Logo Android "></img>
            <img class="blog-icon" src="./Asset/java.png" alt="Logo Java "></img>
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
          </div>
    `;
}

let blogs = []; // length nya adalah 0

function addBlog(e) {
  e.preventDefault();

  let projectname = document.getElementById("project-name").value;
  let message = document.getElementById("your-message").value;

  let imageInput = document.getElementById("upload-image");

  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;

  // let days = (((Math.floor((endDate - startDate) / 1000) / 60) / 60) / 24);

  // if (days < 60) {
  //   return `${days} day${days > 1 ? "s" : ""} ago`;
  // }

  var dt1 = new Date(startDate);
  var dt2 = new Date(endDate);
  var diff = dt2.getTime() - dt1.getTime();
  var days = `${diff / (1000 * 60 * 60 * 24)}`;

  var months = Math.floor(days / 30);

  // let checkBox = document.querySelectorAll("input[type=checkbox]:checked");
  // for (let i = 0; i < checkBox.length; i++) {
  //   checkBox.push(checkBox[i].value);
  // }

  var checkBox = document.querySelectorAll('input[type="checkbox"]:checked ');
  var techno = [];

  checkBox.forEach(function (checkBox) {
    techno.push(checkBox.value);
  });

  var technologies = techno.join(", ");
  // return technologies;

  // || days == "" || monthss == ""

  if (projectname == "" || message == "" || imageInput.files.length === 0) {
    return alert("All input fields cannot be empty");
  }

  if (months > 30) {
    return `${months} day${months > 1 ? "s" : ""}`;
  }

  let image = URL.createObjectURL(imageInput.files[0]);

  let blog = {
    author: "Ferdian",
    projectname: projectname,
    message: message,
    days: days,
    months: months,
    image: image,
    technologies: technologies,
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
    let formattedDate = formatDataToWIB(blogs[i].postedAt);

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
                <a href="/blog" class="blog-item-title">
                   ${blogs[i].projectname}
                </a>
              </p>
              <div>
                <p class="detail-blog-content"> durasi : ${getDuring(
                  blogs[i].days
                )}</p>
                <p>${formattedDate}</p>         
                <p>${blogs[i].technologies} </p>
              </div>
            </div>
          </div>
          <div>
            <p class="blog-text">
            ${blogs[i].message}
            </p>
            <p class="relative-time">${getRelativeTime(blogs[i].postedAt)}</p>
          </div>
          <div>
            <img class="blog-icon" src="./Asset/image/play.png" alt="Logo Play Store "></img>
            <img class="blog-icon" src="./Asset/image/andro.png" alt="Logo Android "></img>
            <img class="blog-icon" src="./Asset/image/java.png" alt="Logo Java "></img>
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
              <img src="./Asset/image/blog-img.png" alt="blog-image" />
            </div>
            <div>
              <p>
                <a href="/blog" class="blog-item-title">
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
            <img class="blog-icon" src="./Asset/image/play.png" alt="Logo Play Store "></img>
            <img class="blog-icon" src="./Asset/image/andro.png" alt="Logo Android "></img>
            <img class="blog-icon" src="./Asset/image/java.png" alt="Logo Java "></img>
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
          </div>
    `;
}

function formatDataToWIB(date) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agus",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  let day = date.getDate().toString().padStart(2, "0");
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`;

  return formattedDate;
}

function getRelativeTime(targetDate) {
  let now = new Date();
  let diffInSeconds = Math.floor((now - targetDate) / 1000); // 7.2 = 7 satuan detik /1000

  // console.log(now);
  // console.log(diffInSeconds);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds > 1 ? "s" : ""} ago`;
  }

  let diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  }

  let diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 60) {
    return `${diffInHours} minute${diffInHours > 1 ? "s" : ""} ago`;
  }

  let diffInMonths = Math.floor(diffInHours / 60);
  if (diffInMonths < 60) {
    return `${diffInMonths} minute${diffInMonths > 1 ? "s" : ""} ago`;
  }
}

function getDuring(targetDate) {
  let diffInDayss = Math.floor(targetDate);

  let diffInMonthss = Math.floor(diffInDayss / 30);
  let diffInDaysss = diffInDayss - diffInMonthss * 30;

  if (diffInMonthss > 0) {
    return `${diffInMonthss} month${diffInMonthss > 1 ? "s" : ""}`;
  }

  // if (diffInDaysss > 0) {
  //   `${diffInDaysss} month${diffInDaysss > 1 ? "s" : ""}`;
  // }

  console.log(
    // diffInDaysss,
    diffInMonthss
  );
}

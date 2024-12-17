let testimonials = [
  {
    author: "Leo G",
    rating: 5,
    content: "Keren banget websitenya!",
    image: "blog-img.png",
  },
  {
    author: "Nur M Arofiq",
    rating: 4,
    content: "Mantaapp! Terima kasih.",
    image: "blog-img.png",
  },
  {
    author: "Rendy Zulfan",
    rating: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis qui molestias blanditiis inventore reprehenderit nesciunt sequi pariatur quaerat? Error?",
    image: "blog-img.png",
  },
  {
    author: "Syifa Maulaya",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, commodi obcaecati necessitatibus totam reprehenderit fuga.",
    image: "blog-img.png",
  },
  {
    author: "Pandu Rizky",
    rating: 5,
    content: "Keren bener gannn",
    image: "blog-img.png",
  },
];

const testimonialsContainer = document.getElementById("testimonialsContainer");

const testimonialsHTML = (daftarTestimoni) => {
  return daftarTestimoni
    .map(
      (testimonial) => `
      <div class="d-flex justify-content-center my-3">
          <div class="card p-3 col mx-0">
              <img src="asset/image/${testimonial.image}" class="card-img-top" alt="..." />
              <div class="card-body px-0">
                <div class="overflow-scroll" style="height: 70px">
                  <p class="card-text">${testimonial.content}</p>
                </div>
                <div class="text-end fw-bold mt-3">
                  <p>- ${testimonial.author}</p>
                  <p>${testimonial.rating}✯</p>
                </div>
              </div>
          </div>
      </div>`
    )
    .join("");
};

function showAllTestimonials() {
  testimonialsContainer.innerHTML = testimonialsHTML(testimonials);
}

showAllTestimonials();

function filterTestimonialByStar(rating) {
  const filteredTestimonial = testimonials.filter(
    (testimonial) => testimonial.rating === rating
  );

  console.log(filteredTestimonial);

  if (filteredTestimonial.length === 0) {
    return (testimonialsContainer.innerHTML = `<p>No testimonials.</p>`);
  }

  setTimeout(() => {
    testimonialsContainer.innerHTML = testimonialsHTML(filteredTestimonial);
  }, 1000);
}

// Create an array to store the carousel sliders
const carousels = [];

// Function to create a carousel slider
function createCarousel(id, name, numItems) {
  const carousel = $(`#${id}`);
  const carouselInner = carousel.find(".carousel-inner");
  const carouselControls = carousel.find(
    ".carousel-control-prev, .carousel-control-next"
  );
  const categoryName = carousel.prev(".text-category");

  // Set the category name
  categoryName.text(name);

  // Create the carousel items
  for (let i = 0; i < numItems; i++) {
    const item = $(`<div class="carousel-item ${i === 0 ? "active" : ""}">`);
    item.html(`
   <div class="card-wrapper">
  <div class="card rounded-5 border-0" style="width: 300px">
    <img src="https://holaa.codexshaper.com/wp/wp-content/uploads/2024/03/trending-3.png" alt
      class="card-img rounded-4 border-0" />
    <!-- transition background -->
    <div class="card-hover card-img-overlay d-block rounded-5"></div>
    <!-- play button -->
    <div class="card-img-overlay text-center d- d-flex justify-content-center align-items-center mb-5">
      <a href="https://holaa.codexshaper.com/wp/wp-content/uploads/2024/03/e86032ef-9397-4888-9d12-7246be9d81bb.mp4"
        class="d-flex justify-content-center align-items-center video-play-btn position-absolute rounded-circle"
        style="
            background: #85776c54;
            backdrop-filter: blur(20px);
            height: 80px;
            width: 80px;
            cursor: pointer;
          ">
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 29" fill="none"
          style="margin-left: 7.5px">
          <path
            d="M22.2584 12.8002C23.5199 13.5823 23.5199 15.4177 22.2584 16.1998L3.05388 28.1066C1.72154 28.9326 6.40836e-07 27.9744 7.0936e-07 26.4068L1.75028e-06 2.59321C1.81881e-06 1.02557 1.72154 0.0673544 3.05388 0.893405L22.2584 12.8002Z"
            fill="currentColor"></path>
        </svg>
      </a>
    </div>

    <!-- Movie details -->
    <div class="card-img text-center d-no d-flex flex-column justify-content-end align-items-center">
      <div
        class="details lh-1 position-absolute text-center w-100 d-flex flex-column justify-content-center align-items-center rounded-4"
        style="
            background: #85776c54;
            backdrop-filter: blur(20px);
            /* height: 137px; */
          ">
        <div class="row">
          <h4 class="movie-title card-title text-uppercase fw-bold h4">
            Enigma of Shadows
          </h4>
        </div>
        <div class="row">
          <ul class="d-flex gap-2 align-items-center justify-items-center">
            <li class="d-flex gap-1 align-items-center">
              <img
                src="https://holaa.codexshaper.com/wp/wp-content/themes/holaa/assets/images/icons/star-stroke.svg"
                alt="Rating" width="16" />
              <span style="color: #999">9.1</span>
            </li>
            <li class="d-flex gap-1 align-items-center">
              <img
                src="https://holaa.codexshaper.com/wp/wp-content/themes/holaa/assets/images/icons/clock-stroke.svg"
                alt="Duration" width="16" />
              <span style="color: #999">03h 10m</span>
            </li>
            <li class="d-flex gap-1 align-items-center">
              <img
                src="https://holaa.codexshaper.com/wp/wp-content/themes/holaa/assets/images/icons/4k-stroke.svg"
                alt="Quality" width="16" />
              <span style="color: #999">4k Quality</span>
            </li>
          </ul>
        </div>
        <div class="row">
          <p class="card-text" style="color: #999">
            Hiking, Drama, Family
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    `);
    carouselInner.append(item);
  }

  // Initialize the carousel
  carousel.carousel({
    interval: 5000,
    pause: "hover",
  });

  // Add event listeners to the carousel controls
  carouselControls.on("click", function () {
    carousel.carousel("next");
  });

  // Add the carousel to the array
  carousels.push(carousel);
}

// Create 5 carousel sliders
createCarousel("carousel-new-releases", "New Releases", 10);
createCarousel("carousel-popular-shows", "Popular Shows", 10);
createCarousel("carousel-trending-now", "Trending Now", 10);
createCarousel("carousel-most-watched", "Most Watched", 10);
createCarousel("carousel-recently-added", "Recently Added", 10);

// You can then access each carousel slider using the carousels array
carousels[0].carousel("next"); // Go to the next slide in the first carousel
carousels[1].carousel("prev"); // Go to the previous slide in the second carousel

const cardSlider = document.querySelector("#cardSlider");
let cardSliderElement = [];

function getCardTitle(i) {
  if (i === 0) {
    return "New releases";
  } else if (i === 1) {
    return "Popular movies";
  } else if (i === 2) {
    return "Trending";
  } else {
    return "";
  }
}

for (let i = 0; i < 3; i++) {
  cardSliderElement[i] = document.createElement("div");
  cardSliderElement[i].classList.add("cSR");
  cardSliderElement[i].innerHTML = `
       <div class="row text-category mb-5">
          <span class="text-white display-3">${getCardTitle(i)}</span>
        </div>
        <div id="carouselCardsControls" class="carousel">

          <div class="carousel-inner carousel-inner-category" id="tt">
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselCardsControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselCardsControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
`;

  cardSlider.append(cardSliderElement[i]);
}

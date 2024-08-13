const faqCard = document.querySelector(".faqContent");
const faqCardTwo = document.querySelector(".faqContentTwo");
let faqElement = [];
let faqElement2 = [];

function getFaqTitle(i) {
  if (i === 0) {
    return "What is Fleek?";
  } else if (i === 1) {
    return "Premium Plan";
  } else if (i === 2) {
    return "Elite Plan";
  } else if (i === 3) {
    return "Elite Plan";
  } else if (i === 4) {
    return "Elite Plan";
  } else if (i === 5) {
    return "Elite Plan";
  } else if (i === 6) {
    return "Elite Plan";
  } else if (i === 7) {
    return "Elite Plan";
  } else if (i === 8) {
    return "Elite Plan";
  } else if (i === 9) {
    return "Elite Plan";
  } else if (i === 10) {
    return "Elite Plan";
  } else if (i === 11) {
    return "Elite Plan";
  } else if (i === 12) {
    return "Elite Plan";
  } else {
    return "";
  }
}

function getFaqText(i) {
  if (i === 0) {
    return "Fleek is a streaming service that allows you to watch movies and shows on demand.";
  } else if (i === 1) {
    return "Get access to exclusive content, including original series and movies, plus additional features like offline viewing.";
  } else if (i === 2) {
    return "Experience the ultimate in entertainment with our elite plan, featuring 4K streaming, Dolby Atmos, and more.";
  } else {
    return "";
  }
}

for (let i = 1; i < 11; i++) {
  let faqElement = document.createElement("div");
  faqElement.classList.add("row", "mb-5");
  faqElement.innerHTML = ` <!-- number -->
              <div class="col-2">
                <span
                  class="text-white rounded-2 p-2"
                 style="background-color: #1f1f1f"
                  >${i}</span
                >
              </div>
              <!-- text -->
              <div class="col-8">
               <div class="row">
                  <h5 class="text-white">${getFaqTitle(i)}</h5>
                </div>
                <div class="row">
                  <h6 class="fqsHead fqs" style="color: #999">
                  ${getFaqText(i)}
                  </h6>
               </div>
              </div>
              <!-- btn -->
              <div class="col-2 d-flex align-items-start">
                <button
                  class="faqBtn border-0 text-white"
                  style="background-color: #15141f"
                >
                  <i class="bi bi-plus" style="font-size: 25px"></i>
                </button>
              </div>
              <!-- gradient line  -->

              <div

                class="row mt-4"

                style="

                  width: 100%;

                  height: 2px;

                  background: linear-gradient(

                    90deg,

                    rgba(52, 48, 135, 0) 0%,

                    rgba(52, 48, 135, 1) 17%,

                    rgba(52, 48, 135, 0) 100%

                  );

                "

              ></div>`;

  if (i < 6) {
    faqCard.append(faqElement);
  } else {
    faqCardTwo.append(faqElement);
  }
}

/* Very very important function please do not touch it */
function makeElement(
  myElem = "div",
  myClass,
  attribute = "",
  value = "",
  content = ""
) {
  let i = 0;
  let elem = document.createElement(myElem);
  if (content) {
    elem.innerHTML = content;
  }
  elem.className = myClass;
  if (attribute) {
    attribute.forEach((element) => {
      elem.setAttribute(element, value[i]);
      i++;
    });
  }
  return elem;
}

let header = document.querySelector(".header");
let content1 = `
  <div class="container-xxl">
    <nav class=" navbar-expand-lg navbar-dark bg-transparent">
      <div class=" row gap-0 py-sm-1 d-flex align-items-center" >
        <div
          class="col-6 col-md-6 col-lg-2 d-flex justify-content-center justify-content-sm-start align-content-center">
          <!-- logo -->
          <a class="navbar-brand" href="#"><img
              src="/assets/img/logo.png"
              alt="logo"
              width="114" height="114" />
   
          </a>
        </div>
        <div
          class="col-8 d-none d-lg-flex justify-content-center align-content-center ">
          <div class="row ">
            <div class="col fleekNavBorder px-1 py-1">
              <ul
                class="navbar-nav fleekNav pt-2 px-1  d-flex  align-items-center justify-items-center  flex-grow-1">
                <li class="nav-item navItems rounded   ">
                  <a
                    class="h4 nav-link py-3 px-4 rounded d-inline-block "
                    aria-current="page"
                    href="/index.html">Home</a>
                </li>
                <li class="nav-item navItems rounded ">
                  <a
                    class="h4 nav-link py-3 px-4 rounded"
                    href="/movies&shows.html">Movies <span>&</span>
                    Shows</a>
                </li>
                <li class="nav-item navItems rounded  ">
                  <a
                    class="h4 nav-link py-3 px-4 rounded"
                    href="/support.html  ">Support</a>
                </li>
                <li class="nav-item navItems rounded  ">
                  <a
                    class="h4 nav-link py-3 px-4 rounded"
                    href="/subscription.html">Subscription</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="col-2 d-none d-lg-block d-flex justify-items-center align-items-center">
          <!-- search & notification -->
          <div
            class="d-flex justify-content-end align-items-center gap-3">
            <a href="#search" class="text-white "
              ><i
                class="bi bi-search" style="font-size: x-large;"></i></a>
            <a
              href="#notificationIcon"
              class="text-white " ><i
                class="bi bi-bell" style="font-size: x-large;"></i></a>
          </div>
        </div>
        <div
          class="col-6 col-lg-0 d-block d-lg-none d-flex justify-content-end">
          <!-- toggle btn -->
          <button
            class="navbar-toggler shadow-none border-0 d-block d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div class="row d-block d-lg-none">
        <!-- sidebar -->
        <div
          class="sidebar offcanvas offcanvas-start d-block d-lg-none"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style=" background-color: #15141f;">
          <!-- sidebar header -->
          <div class="offcanvas-header text-white p-2">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <img src="/assets/img/logo.png" alt="logo" width="114" height="114" />
            </h5>
  
            <button
              type="button"
              class="btn-close btn-close-white shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
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
              "></div>
          <div
            class="offcanvas-body d-flex flex-column align-items-start">
            <ul
              class="navbar-nav d-block d-lg-none fs-5 flex-grow-1 pe-3 rounded">
              <li class="nav-item mx-2">
                <a class="nav-link active" aria-current="page"
                  href="/index.html">Home</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/movies&shows.html">Movies</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/support.html">Support</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/subscription.html">Subscription</a>
              </li>
            </ul>
          </div>
          <!-- search & notification -->
          <!-- 
          <div class="d-flex justify-content-end align-items-center gap-3">
            <a href="#search" class="text-white" style="font-size: 25px"
              ><i class="bi bi-search"></i
            ></a>
            <a
              href="#notificationIcon"
              class="text-white"
              style="font-size: 25px"
              ><i class="bi bi-bell"></i
            ></a>
          </div>
  -->
        </div>
      </div>
    </nav>
  </div>
`;
myHeader = makeElement("header", "container-fluid", "", "", content1);
header.append(myHeader);

let footer = document.querySelector(".footer");
let content2 = `<div class="container-xxl" style="background-color: #161616">
  <footer class="py-5 0f0f0f">
    <div class="row">
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Home</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Categories</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Devices</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Pricing</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">FAQs</a>
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Movies</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Generes</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Trending</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">New Releases</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Popular</a>
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Shows</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Generes</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Trending</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">New Releases</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Popular</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Support</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Subscription</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Subscription</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Features</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Connet With Us</h5>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i
                class="bi bi-twitter-x text-white"
                style="font-size: 24px"
              ></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i
                class="bi bi-instagram text-white"
                style="font-size: 24px"
              ></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i
                class="bi bi-facebook text-white"
                style="font-size: 24px"
              ></i
            ></a>
          </li>
        </ul>
      </div>

      <div
        class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-white"
      >
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-body-emphasis text-secondary" href="#" 
              >Terms of Use</a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis text-secondary" href="#" 
              >Privacy policy</a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis text-secondary" href="#" 
              >Cookie policy</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</div>`;
myFooter = makeElement("section", "container-fluid", "", "", content2);
footer.append(myFooter);

let subscription = document.querySelector(".subs");
let content3 = `<div class="container-xxl rounded-4 position-relative" id="subImg">
  <div
    class="card-img-overlay subcBackground position-absolute row d-flex justify-content-center align-items-center px-2 px-sm-5 py-2 py-sm-5"
    style="
      height: 314px;
 
    "
  >
    <div class="col-12 col-md-6 text-center text-sm-start">
      <div class="row mb-4 mb-sm-0">
        <span class="text-white display-4 fw-bold"
          >Start your free trial</span
        >
      </div>
      <div class="row">
        <span class=" h-6" style="color: #999"
          >This is a clear and concise call to action that encourages
          users to sign up for a free trial of Fleek.</span
        >
      </div>
    </div>
    <div class="col d-flex justify-content-center justify-content-sm-end">
      <a
        href="#"
        class="text-white btn-base fw-5 h-6 text-center py-2 py-sm-3 px-3 px-sm-4 rounded-2"
        style="
          text-decoration: none;
       
        "
        type="button"
        >Start a Free Trial</a
      >
    </div>
  </div>
</div>`;
mySubscription = makeElement("section", "container-fluid", "", "", content3);
subscription.append(mySubscription);

let faq = document.querySelector(".faq");
let content4 = `<div class="container-xxl">
  <div class="row">
    <div class="col-12 col-md-8">
      <div class="row mb-2">
        <h2 class="text-white">Frequently Ask Questions</h2>
      </div>
      <div class="row mb-3 mb-sm-0">
        <h6 style="color: #999">
          Got questions? We've got answers! Check out our FAQ section to
          find answers to the most common questions about Fleek.
        </h6>
      </div>
    </div>
    <div
      class="col-12 col-md-4 d-flex justify-content-start justify-content-sm-end align-items-center"
    >
      <a
        href="#"
        class="text-white btn-base fw-5 fs-6 text-center py-2 py-sm-2 px-3 px-sm-4 rounded-2"
        style="
          text-decoration: none;
          width: max-content;
          height: max-content;
       
        "
        type="button"
        >Ask a Question</a
      >
    </div>
  </div>
  <div class="row mt-5 container">
    <div class="col-12 col-lg-6">
      <div class="row">
        <!-- number -->
        <div class="col-2">
          <span
            class="text-white rounded-2 p-2"
            style="background-color: #1f1f1f"
            >01</span
          >
        </div>

        <!-- text -->
        <div class="col-8">
          <div class="row">
            <h5 class="text-white">What is Fleek?</h5>
          </div>
          <div class="row">
            <h6 class="fqsHead fqs" style="color: #999">
              Fleek is a streaming service that allows you to watch movies
              and shows on demand.
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
        ></div>
      </div>
      <div class="row mt-5">
        <!-- number -->
        <div class="col-2">
          <span
            class="text-white rounded-2 p-2"
            style="background-color: #1f1f1f"
            >02</span
          >
        </div>

        <!-- text -->
        <div class="col-8">
          <div class="row">
            <h5 class="text-white">What is Fleek?</h5>
          </div>
          <div class="row fqs">
            <h6 class="" style="color: #999">
              Fleek is a streaming service that allows you to watch movies
              and shows on demand.
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
        ></div>
      </div>
      <div class="row mt-5">
        <!-- number -->
        <div class="col-2">
          <span
            class="text-white rounded-2 p-2"
            style="background-color: #1f1f1f"
            >03</span
          >
        </div>

        <!-- text -->
        <div class="col-8">
          <div class="row">
            <h5 class="text-white">What is Fleek?</h5>
          </div>
          <div class="row fqs">
            <h6 class="" style="color: #999">
              Fleek is a streaming service that allows you to watch movies
              and shows on demand.
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
        ></div>
      </div>
      <div class="row mt-5">
        <!-- number -->
        <div class="col-2">
          <span
            class="text-white rounded-2 p-2"
            style="background-color: #1f1f1f"
            >04</span
          >
        </div>

        <!-- text -->
        <div class="col-8">
          <div class="row">
            <h5 class="text-white">What is Fleek?</h5>
          </div>
          <div class="row fqs">
            <h6 class="" style="color: #999">
              Fleek is a streaming service that allows you to watch movies
              and shows on demand.
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
        ></div>
      </div>
      <div class="row mt-5">
        <!-- number -->
        <div class="col-2">
          <span
            class="text-white rounded-2 p-2"
            style="background-color: #1f1f1f"
            >05</span
          >
        </div>

        <!-- text -->
        <div class="col-8">
          <div class="row">
            <h5 class="text-white">What is Fleek?</h5>
          </div>
          <div class="row fqs">
            <h6 class="" style="color: #999">
              Fleek is a streaming service that allows you to watch movies
              and shows on demand.
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
        ></div>
      </div>
    </div>
    <div class="col-12 d-none d-lg-block col-md-6 mt-5 mt-sm-0">
      <div class="row">
        <!-- number -->
        <div class="col-2">
          <span
            class="text-white rounded-2 p-2"
            style="background-color: #1f1f1f"
            >06</span
          >
        </div>

        <!-- text -->
        <div class="col-8">
          <div class="row">
            <h5 class="text-white">What is Fleek?</h5>
          </div>
          <div class="row fqs">
            <h6 class="" style="color: #999">
              Fleek is a streaming service that allows you to watch movies
              and shows on demand.
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
        ></div>
      </div>
      <div class="row mt-5">
        <!-- number -->
        <div class="col-2">
          <span
            class="text-white rounded-2 p-2"
            style="background-color: #1f1f1f"
            >07</span
          >
        </div>

        <!-- text -->
        <div class="col-8">
          <div class="row">
            <h5 class="text-white">What is Fleek?</h5>
          </div>
          <div class="row fqs">
            <h6 class="" style="color: #999">
              Fleek is a streaming service that allows you to watch movies
              and shows on demand.
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
        ></div>
      </div>
      <div class="row mt-5">
        <!-- number -->
        <div class="col-2">
          <span
            class="text-white rounded-2 p-2"
            style="background-color: #1f1f1f"
            >08</span
          >
        </div>

        <!-- text -->
        <div class="col-8">
          <div class="row">
            <h5 class="text-white">What is Fleek?</h5>
          </div>
          <div class="row fqs">
            <h6 class="" style="color: #999">
              Fleek is a streaming service that allows you to watch movies
              and shows on demand.
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
        ></div>
      </div>
      <div class="row mt-5">
        <!-- number -->
        <div class="col-2">
          <span
            class="text-white rounded-2 p-2"
            style="background-color: #1f1f1f"
            >09</span
          >
        </div>

        <!-- text -->
        <div class="col-8">
          <div class="row">
            <h5 class="text-white">What is Fleek?</h5>
          </div>
          <div class="row fqs">
            <h6 class="" style="color: #999">
              Fleek is a streaming service that allows you to watch movies
              and shows on demand.
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
        ></div>
      </div>
      <div class="row mt-5">
        <!-- number -->
        <div class="col-2">
          <span
            class="text-white rounded-2 p-2"
            style="background-color: #1f1f1f"
            >10</span
          >
        </div>

        <!-- text -->
        <div class="col-8">
          <div class="row">
            <h5 class="text-white">What is Fleek?</h5>
          </div>
          <div class="row fqs">
            <h6 class="" style="color: #999">
              Fleek is a streaming service that allows you to watch movies
              and shows on demand.
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
        ></div>
      </div>
    </div>
  </div>
</div>`;
myFaq = makeElement("section", "container-fluid", "", "", content4);
faq.append(myFaq);

let subsPlan = document.querySelector(".subsPlan");
let content5 = ` <div class="mt-3 container-xxl">
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="row mb-2">
              <h1 class="text-white">Choose the plan that's right for you</h1>
            </div>
            <div class="row mb-3 mb-sm-0">
              <h6 style="color: #999">
                Join Fleek and select from our flexible subscription options
                tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </h6>
            </div>
          </div>
          <div
            class="col-12 col-lg-4 d-flex justify-content-start justify-content-sm-end align-items-center"
          >
            <div class="rounded px-2 py-2" style="background-color: #0f0f0f">
              <button
                class="border-0 py-2 px-4 text-white rounded-3"
                style="background-color: #202020"
              >
                Monthly
              </button>
              <button
                class="border-0 ms-3 py-2 px-4 text-white rounded-3"
                style="background-color: transparent"
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 col-lg-4 col-md-6 mb-3 mb-lg-0">
            <div
              class="card border-0 rounded-3"
              style="border: 2px solid #202020"
            >
              <div
                class="card-body border-0 rounded-2"
                style="background-color: #0f0f0f"
              >
                <h5 class="card-title text-white">Basic Plan</h5>
                <p class="card-text mt-3 mb-4" style="color: #999">
                  Enjoy an extensive library of movies and shows, featuring a
                  range of content, including recently released titles.
                </p>
                <p>
                  <span class="display-5" style="color: #fff"
                    ><i
                      class="bi bi-currency-rupee display-5"
                      style="color: #fff"
                    ></i
                    >99
                    <span class="h6" style="color: #999">/month </span></span
                  >
                </p>
                <div class="row">
                  <div class="col">
                    <a
                      href="#"
                      class="py-2 px-2 rounded"
                      type="button"
                      style="
                        text-decoration: none;
                        color: #fff;
                        background-color: #202020;
                      "
                      >Start Free Trial
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="#"
                      class="py-2 px-3 rounded btn-base"
                      type="button"
                      style="
                        text-decoration: none;
                        color: #fff;
                     
                      "
                      >Choose Plan</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 mb-3 mb-lg-0">
            <div
              class="card border-0 rounded-3"
              style="border: 2px solid #202020"
            >
              <div
                class="card-body border-0 rounded-2"
                style="background-color: #0f0f0f"
              >
                <h5 class="card-title text-white">Basic Plan</h5>
                <p class="card-text mt-3 mb-4" style="color: #999">
                  Enjoy an extensive library of movies and shows, featuring a
                  range of content, including recently released titles.
                </p>
                <p>
                  <span class="display-5" style="color: #fff"
                    ><i
                      class="bi bi-currency-rupee display-5"
                      style="color: #fff"
                    ></i
                    >99
                    <span class="h6" style="color: #999">/month </span></span
                  >
                </p>
                <div class="row">
                  <div class="col">
                    <a
                      href="#"
                      class="py-2 px-2 rounded"
                      type="button"
                      style="
                        text-decoration: none;
                        color: #fff;
                        background-color: #202020;
                      "
                      >Start Free Trial
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="#"
                      class="py-2 px-3 rounded btn-base"
                      type="button"
                      style="
                        text-decoration: none;
                        color: #fff;
                       
                      "
                      >Choose Plan</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 mb-3 mb-lg-0">
            <div
              class="card border-0 rounded-3"
              style="border: 2px solid #202020"
            >
              <div
                class="card-body border-0 rounded-2"
                style="background-color: #0f0f0f"
              >
                <h5 class="card-title text-white">Basic Plan</h5>
                <p class="card-text mt-3 mb-4" style="color: #999">
                  Enjoy an extensive library of movies and shows, featuring a
                  range of content, including recently released titles.
                </p>
                <p>
                  <span class="display-5" style="color: #fff"
                    ><i
                      class="bi bi-currency-rupee display-5"
                      style="color: #fff"
                    ></i
                    >99
                    <span class="h6" style="color: #999">/month </span></span
                  >
                </p>
                <div class="row">
                  <div class="col">
                    <a
                      href="#"
                      class="py-2 px-2 rounded"
                      type="button"
                      style="
                        text-decoration: none;
                        color: #fff;
                        background-color: #202020;
                      "
                      >Start Free Trial
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="#"
                      class="py-2 px-3 rounded btn-base"
                      type="button"
                      style="
                        text-decoration: none;
                        color: #fff;
                     
                      "
                      >Choose Plan</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
mysubsPlan = makeElement("section", "container-fluid", "", "", content5);
subsPlan.append(mysubsPlan);

let movieDetail = document.querySelector(".moviesDetail");
let content6 = `<div
              class="row rounded-3 mb-3 p-2 p-sm-4"
              style="background-color: #202020"
            >
              <div class="text container">
                <div class="row">
                  <h6 style="color: #999999">Description</h6>
                </div>
                <div class="row">
                  <p style="color: #ffffff">
                    A fiery young man clashes with an unflinching forest officer
                    in a south Indian village where spirituality, fate and
                    folklore rule the lands.
                  </p>
                </div>
              </div>
            </div>

            <!-- review container -->

            <div
              class="row rounded-3 p-1 p-sm-4"
              style="background-color: #202020"
            >
              <div class="review container">
                <!-- rewiew button -->

                <div class="row mb-3">
                  <div class="row">
                    <div
                      class="d-flex justify-content-between align-items-center flex-row"
                    >
                      <h6 style="color: #999999">Reviews</h6>
                      <button
                        class="btn btn-sm rounded-2 gap-2 d-flex align-items-center"
                        style="
                          /* padding: 10px; */
                          background-color: #161616;
                          color: #fff;
                          border: 2px solid #2a2a2a;
                        "
                      >
                        <i class="bi bi-plus-lg"> </i>
                        <h6>Add Your Reviews</h6>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- review card -->

                <div class="row mb-3">
                  <div class="col-sm-6 mb-3 m-sm-0">
                    <div
                      class="card border-0 text-white"
                      style="background-color: #161616"
                    >
                      <div class="card-body">
                        <h5
                          class="card-title d-flex justify-content-between align-items-center"
                          style="background-color: none"
                        >
                          Aniket Roy
                          <div
                            class="rounded-5 px-2 py-2"
                            style="
                              border: 1px solid #2a2a2a;
                              background-color: #202020;
                            "
                          >
                            <span class="star" style="font-size: 15px">★</span>
                            <span class="star" style="font-size: 15px">★</span>
                            <span class="star" style="font-size: 15px">★</span>
                            <span class="star" style="font-size: 15px">★</span>
                            <span class="star" style="font-size: 15px">★</span>
                            <span style="font-size: 15px">4.5</span>
                          </div>
                        </h5>
                        <ul
                          class="d-flex justify-content-center align-items-center"
                          style="
                            border: 1px solid #2a2a2a;
                            background-color: #202020;
                          "
                        ></ul>
                        <h6
                          class="card-subtitle mb-3"
                          style="background-color: none; color: #999"
                        >
                          From India
                        </h6>
                        <p class="card-text" style="color: #999">
                          This movie was recommended to me by a very dear friend
                          who went for the movie by herself. I went to the
                          cinemas to watch but had a houseful board so couldn't
                          watch it,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 mb-3 m-sm-0">
                    <div
                      class="card border-0 text-white"
                      style="background-color: #161616"
                    >
                      <div class="card-body">
                        <h5
                          class="card-title d-flex justify-content-between align-items-center"
                          style="background-color: none"
                        >
                          Aniket Roy
                          <div
                            class="rounded-5 px-2 py-2"
                            style="
                              border: 1px solid #2a2a2a;
                              background-color: #202020;
                            "
                          >
                            <span class="star" style="font-size: 15px">★</span>
                            <span class="star" style="font-size: 15px">★</span>
                            <span class="star" style="font-size: 15px">★</span>
                            <span class="star" style="font-size: 15px">★</span>
                            <span class="star" style="font-size: 15px">★</span>
                            <span style="font-size: 15px">4.5</span>
                          </div>
                        </h5>
                        <ul
                          class="d-flex justify-content-center align-items-center"
                          style="
                            border: 1px solid #2a2a2a;
                            background-color: #202020;
                          "
                        ></ul>
                        <h6
                          class="card-subtitle mb-3"
                          style="background-color: none; color: #999"
                        >
                          From India
                        </h6>
                        <p class="card-text" style="color: #999">
                          This movie was recommended to me by a very dear friend
                          who went for the movie by herself. I went to the
                          cinemas to watch but had a houseful board so couldn't
                          watch it,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- slider btn -->

                <div class="row d-flex justify-content-center">
                  <div class="text-center">
                    <button class="btn">
                      <span style="font-size: 1.5rem"
                        ><i class="bi bi-arrow-left text-white"></i
                      ></span>
                    </button>
                    <button class="btn">
                      <span style="font-size: 1.5rem"
                        ><i class="bi bi-arrow-right text-white"></i
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>`;
myMoviesDetails = makeElement("div", " ", "", "", content6);
movieDetails.append(myMovieDetails);

const card = document.querySelector("#tt");
let cardElement = [];
for (let i = 0; i < 10; i++) {
  cardElement[i] = document.createElement("div");
  cardElement[i].classList.add("carousel-item", "item-category");
  cardElement[i].innerHTML = `
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
`;

  tt.append(cardElement[i]);
}

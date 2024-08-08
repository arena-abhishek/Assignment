document.write(`   <header class="container-fluid">
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
</header>`)
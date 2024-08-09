/* const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moiveBox = document.querySelector("#movie-box");
const getMovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  showMovies(data);
};
getMovies(APIURL);

const showMovies = (data) => {
  moiveBox.innerHTML = "";
  data.results.forEach((result) => {
    const imagePath =
      result.poster_path === null
        ? "img/image-missing.png"
        : IMGPATH + result.poster_path;
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `;
    moiveBox.appendChild(box);
  });
};


document.querySelector("#search").addEventListener("keyup", function (event) {
  if (event.target.value != "") {
    getMovies(SEARCHAPI + event.target.value);
  } else {
    getMovies(APIURL);
  }
});
 */

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moiveBox = $(".searchPanel");
const getMovies = async (url) => {
  const response = await $.ajax({});
  const data = response;
  showMovies(data);
};
getMovies();

const showMovies = (data) => {
  moiveBox.html("");
  $.each(data.results, (index, result) => {
    const imagePath =
      result.poster_path === null
        ? "img/image-missing.png"
        : IMGPATH + result.poster_path;
    const box = $("<div>").addClass(".box");
    box.html(`
               <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>`);
    moiveBox.append(box);
  });
};

$("#searchInput").on("keyup", function () {
  if ($(this).val() != "") {
    getMovies(SEARCHAPI + $(this).val());
  } else {
    getMovies(APIURL);
  }
});

/* search icon */

$(document).ready(function () {
  $("#searchInput").hide();
  $("#searchPanel").hide();

  $(".searchIcon").on("click", function () {
    $("#searchPanel")
      .addClass("searchPanelBg")
      .animate(
        {
          height: "toggle",
          opacity: "toggle",
        },
        {
          duration: 500,
          easing: "swing",
          complete: function () {
            $(this).focus();
          },
        }
      );
    $("#searchInput").animate(
      {
        height: "toggle",
        opacity: "toggle",
      },
      {
        duration: 500,
        easing: "swing",
        complete: function () {
          $(this).focus();
        },
      }
    );
  });
});

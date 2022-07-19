"use strict";

const btn = document.querySelector(".btn-search_movie");
const moviesContainer = document.querySelector(".movies");

const renderMovie = function (data) {
  const html = `

  <article class="movie">
          <div class="movie__data">
            <h3 class="movie__name">${data.name}</h3>
            <h2 class="movie__overview">${data.overview}</h2>
            <h4 class="movie__year">${data.releaseYear}</h4>
            <div class="grid">
              <p class="movie__row"><span>👍  IMDB rating: </span>${data.imdbRating}</p>
              <p class="movie__row"><span>🎞 Genre: </span>${data.genre}</p>
              <p class="movie__row"><span>👩🏼‍🤝‍🧑🏻 Director: </span>${data.director}</p>
            </div>
            </div>
        </article>
  `;

  moviesContainer.innerHTML = "";
  moviesContainer.insertAdjacentHTML("afterbegin", html);
  moviesContainer.style.opacity = 1;
};

const randomMovieSearch = function () {
  fetch("https://k2maan-moviehut.herokuapp.com/api/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderMovie(data);
    });
};

btn.addEventListener("click", randomMovieSearch);

// "http://www.omdbapi.com/?i=tt3896198&apikey=80c48b21"
// http://www.omdbapi.com/?apikey=[yourkey]&

// const id = localStorage.getItem("id") |||| didnt even need this to work. dont know why

async function rendermovie(movie) {
    //getting the data
    const movies = await fetch(`https://www.omdbapi.com/?apikey=80c48b21&s=${movie}`)
    //getting into Javascript use .json
    // movieListEl.classList += (' books__loading')
    const movieData = await movies.json();
    // movieListEl.classList.remove('books__loading')
    const movieListEl = document.querySelector(".movies")
    // so i can search up the right ${} in the API using console.log
    // console.log(movieData)

    //to set every element of the array to html
    movieListEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join("")
}

async function onSearchChange(event) {
    //event.target.value is used to search for value when typed in search. eg. In this case its movie titles
    const movie = event.target.value;
    // to call the event above
    rendermovie(movie)

}

function movieHTML(movie) {
    return `<div class="movie__wrapper">
                    <div class="poster__wrapper">
                        <img src="${movie.Poster}" alt="" class="poster">
                    </div>
                    <div class="movie__description">
                        <h2 class="movie__title title">
                        ${movie.Title}
                        </h2>
                        <p class="movie__year">
                        ${movie.Year}
                        </p>
                        <p class="movie__imdb">
                        ${movie.imdbID}
                        </p>
                        <p class="movie__type">
                        ${movie.Type}
                        </p>
                    </div>
            </div>`
}

rendermovie(movie)
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dc3959e18dc07cab7733cd17f3f2eb39&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=dc3959e18dc07cab7733cd17f3f2eb39&query="';

const SHOW_API = 'https://api.themoviedb.org/3/movie/';

const api_key = 'dc3959e18dc07cab7733cd17f3f2eb39'

const form = document.getElementById('form');

// Get initial movies

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function getMovie(movie) {
    console.log("here!" + this)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { id, title, poster_path, vote_average, overview } = movie
    
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `<a href="movie.html?id=${id}?api_key=${api_key}&language=en-US" class="movieLink" style="display: block;" ><img src="${IMG_PATH + poster_path}" alt="${title}" /><div class="movie-info"><h3>${title}</h3><span class="${getClassByRate(vote_average)}">${vote_average}</span></div><div class="overview"><h3>Overview</h3><p>${overview}</p></div></a>`
        //movieEl.innerHTML = `<a href="${SHOW_API + id}?api_key=${api_key}&language=en-US" class="movieLink" style="display: block;" ><img src="${IMG_PATH + poster_path}" alt="${title}" /></a><div class="movie-info"><h3>${title}</h3><span class="${getClassByRate(vote_average)}">${vote_average}</span></div><div class="overview"><h3>Overview</h3><p>${overview}</p></div>`

        main.appendChild(movieEl)
    
    })
}

function getClassByRate(vote){
    if(vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
        
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    } else {
        window.location.reload();
    }
})

document.getElementsByClassName('movieLink').addEventListener('click', (e) => {
    e.preventDefault()
    console.log("clicked")
    
})
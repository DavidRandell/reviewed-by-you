
const urlArray = window.location.search.split('?');
const movieID = urlArray[1];

const api_key = 'dc3959e18dc07cab7733cd17f3f2eb39'

const API_URL = 'https://api.themoviedb.org/3/movie/'+movieID+'?api_key='+api_key+'&language=en-US';

//console.log(API_URL)

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SHOW_API = 'https://api.themoviedb.org/3/movie/';



//const form = document.getElementById('form');

// Get movies details

getMovieDetails(API_URL)

async function getMovieDetails(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovieDetails(data)
    //getReviews(movieID, data)
}

function showMovieDetails(movie) {

console.log(movie)

    main.innerHTML = ''

    const { title, poster_path, vote_average, vote_count, overview, tagline } = movie 

    const rounded_average = (Math.round(movie.vote_average * 2) /2 ).toFixed(1)

    const movieEl = document.createElement('div')
    movieEl.innerHTML = `<h2>${title}</h2><h3 class="tagline">"${tagline}"</h3><img src="${IMG_PATH + poster_path}" alt="${title}" class="movie-poster" /><h4>Movie Summary</h4><p>${overview}</p><p class="${getClassByRate(vote_average)}">Average Rating: ${rounded_average} (${vote_count})</p></div>`

    main.appendChild(movieEl)
}

// function getReviews(id, movie) {
//     const { title } = movie 

//     const reviewContainer = document.getElementById('reviews')
//     reviewContainer.innerHTML = `<h4 class="sectionHeading">Reviews for ${title}.</h4>`

// }


function getClassByRate(vote){
    if(vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
        
}

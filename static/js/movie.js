const urlArray = window.location.search.split('?');
const movieID = urlArray[1];

console.log(movieID)

const api_key = 'dc3959e18dc07cab7733cd17f3f2eb39'

const API_URL = 'https://api.themoviedb.org/3/movie/'+movieID+'?api_key='+api_key+'&language=en-US';

console.log(API_URL)

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SHOW_API = 'https://api.themoviedb.org/3/movie/';



//const form = document.getElementById('form');

// Get movies details

getMovieDetails(API_URL)

async function getMovieDetails(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovieDetails(data)
}


function showMovieDetails(movie) {
    main.innerHTML = ''

    const { title, poster_path, vote_average, overview } = movie 

    const movieEl = document.createElement('div')
    movieEl.innerHTML = `<img src="${IMG_PATH + poster_path}" alt="${title}" /><div class="movie-info"><h3>${title}</h3><span class="${getClassByRate(vote_average)}">${vote_average}</span></div><div class="overview"><h3>Overview</h3><p>${overview}</p></div>`
    //movieEl.innerHTML = `<a href="${SHOW_API + id}?api_key=${api_key}&language=en-US" class="movieLink" style="display: block;" ><img src="${IMG_PATH + poster_path}" alt="${title}" /></a><div class="movie-info"><h3>${title}</h3><span class="${getClassByRate(vote_average)}">${vote_average}</span></div><div class="overview"><h3>Overview</h3><p>${overview}</p></div>`

    main.appendChild(movieEl)
    
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

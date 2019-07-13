const API_TOKEN = "9ca730acdfd335958fa0b8e10b5e3713";

// Recherche un film
export function getFilmsFromApiWithSearchedText(text, page) {
    const url = "https://api.themoviedb.org/3/search/movie?api_key="+ API_TOKEN + "&language=fr&query="+ text + "&page="+ page
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
    
}

// Récupération des images pour les Films
export function getImageFromApi(name) {
    return "https://image.tmdb.org/t/p/w500" + name;
}

export function getFilmDetailFromApi(id) {
    const url = "https://api.themoviedb.org/3/movie/"+ id +"?api_key="+ API_TOKEN + "&language=fr";
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}
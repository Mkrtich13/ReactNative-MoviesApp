const API_TOKEN = "9ca730acdfd335958fa0b8e10b5e3713";

export function getFilmsFromApiWithSearchedText(text) {
    const url = "https://api.themoviedb.org/3/search/movie?api_key="+ API_TOKEN + "&language=fr&query="+ text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
    
}
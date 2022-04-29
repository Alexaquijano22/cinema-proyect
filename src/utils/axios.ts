import axios from 'axios'

const apiFirebase = axios.create({
    baseURL: "https://buscador-peliculas-aa00d-default-rtdb.firebaseio.com" 
})

const apiMoviesDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3', 
    params: {
        api_key: "e011a0c8a14e3792de8063a93825ea39",
        language: "es-US"
    }
})

export {apiFirebase, apiMoviesDB}

  
import axios from "axios";

export const Axios = axios.create({
    method: "GET",
    baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
    // params: { q: "weekend" },
    headers: {
        "X-RapidAPI-Key": "39647fde24msh79d5f4573934ff2p195351jsne656f1f232dd",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
})

export const spotifyAPi = axios.create({
    method:"GET",
    baseURL:'https://api.spotify.com/v1/'
})

//soon will add more liked songs playlist

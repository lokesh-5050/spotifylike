import axios from "axios";

export const Axios = axios.create({
    method: "GET",
    baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
    params: { q: "eminem" },
    headers: {
        "X-RapidAPI-Key": "39647fde24msh79d5f4573934ff2p195351jsne656f1f232dd",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
})
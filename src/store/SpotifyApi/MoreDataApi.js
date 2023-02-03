import { createSlice } from '@reduxjs/toolkit'
import { spotifyAPi } from '../../Components/Axios/Axios'

const initialState = {
    featuredPlaylists: [],
    categories: [],
    newReleases: [],
    severalTracks: [],
    Artists: [],
    Recommendations:[]   
}

export const MoreDataSlice = createSlice({
    name: 'moreData',
    initialState,
    reducers: {
        getFeaturedPlaylists: (state, actions) => {
            state.featuredPlaylists = actions.payload
        },
        getCategories: (state, actions) => {
            state.categories = actions.payload
        },
        getNewReleases: (state, actions) => {
            state.newReleases = actions.payload
        },
        getSeveralTracks: (state, actions) => {
            state.severalTracks = actions.payload
        },
        getArtists: (state, actions) => {
            state.Artists = actions.payload
        },
        getRecommendations : (state,actions) =>{
            state.Recommendations = actions.payload
        }

    },
})

export const handleAsyncMoreData = (token, limit) => (dispatch, prevState) => {

    const moreInfo = async (token) => {
        let { data } = await spotifyAPi(`/browse/featured-playlists?country=SE&locale=sv_se&timestamp=2023-02-03T17%3A43%3A30&offset=0&limit=${limit}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        // console.log(data + " featured");
        await dispatch(getFeaturedPlaylists(data.playlists.items))

        let categories = await spotifyAPi(`/browse/categories`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        // console.log(categories.data.categories.items, " categories");
        await dispatch(getCategories(categories.data.categories.items))

        let newreleases = await spotifyAPi(`/browse/new-releases?country=SE&limit=${limit}&offset=0`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        // console.log(newreleases.data.albums.items, " newreleases");
        await dispatch(getNewReleases(newreleases.data.albums.items))

        let severalTracks = await spotifyAPi(`/tracks?market=ES&ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        // console.log(severalTracks.data.tracks, " severalTracks");
        await dispatch(getSeveralTracks(severalTracks.data.tracks))

        let artists = await spotifyAPi(`/search?q=top&type=artist&market=ES&limit=5&offset=0`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        // console.log(artists.data.artists.items, " artists");
        await dispatch(getArtists(artists.data.artists.items))

        let recomanded = await spotifyAPi(`/recommendations?limit=${limit}&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        console.log(recomanded.data.tracks, " recomanded");
        // console.log(recomanded.data.seeds, " recomanded");
        //has previe_url
        await dispatch(getRecommendations(recomanded.data.tracks))




    }
    moreInfo(token)


}

export const { getFeaturedPlaylists, getCategories, getNewReleases, getSeveralTracks, getArtists ,getRecommendations } = MoreDataSlice.actions

export default MoreDataSlice.reducer;

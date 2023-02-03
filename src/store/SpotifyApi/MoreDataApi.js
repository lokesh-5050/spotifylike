import { createSlice } from '@reduxjs/toolkit'
import { spotifyAPi } from '../../Components/Axios/Axios'

const initialState = {
    featuredPlaylists: [],
    categories:[],
    newReleases:[]
}

export const MoreDataSlice = createSlice({
    name: 'moreData',
    initialState,
    reducers: {
        getFeaturedPlaylists: (state, actions) => {
            state.featuredPlaylists = actions.payload
        },
        getCategories : (state,actions)=>{
            state.categories = actions.payload
        },
        getNewReleases: (state,actions)=>{
            state.newReleases = actions.payload
        }

    },
})

export const handleAsyncMoreData = (token) => (dispatch, prevState) => {

    const moreInfo = async (token) => {
        let { data } = await spotifyAPi(`/browse/featured-playlists?country=SE&locale=sv_se&timestamp=2023-02-03T17%3A43%3A30&offset=0&limit=10`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        console.log(data + " featured");
        await dispatch(getFeaturedPlaylists(data.playlists.items))

        let dataa = await spotifyAPi(`/browse/categories`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        console.log(dataa, " dataa");
        await dispatch(getCategories(dataa.data))




    }
    moreInfo(token)


}

export const { getFeaturedPlaylists , getCategories} = MoreDataSlice.actions

export default MoreDataSlice.reducer;

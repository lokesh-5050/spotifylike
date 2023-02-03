import { createSlice } from '@reduxjs/toolkit'
import { spotifyAPi } from '../../Components/Axios/Axios'

const initialState = {
    currentUser: null,
    playlists: [],
    token: ''
}

export const CurrentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        getUserInfo: (state, actions) => {
            console.log(actions.payload);
            state.currentUser = actions.payload
        },
        setToken: (state, actions) => {
            state.token = actions.payload
        },
        currenUserPlaylists: (state, actions) => {
            state.playlists = actions.payload
        }

    },
})

export const handleAsync = (token) => (dispatch, prevState) => {

    const fetchingUserInfo = async (token) => {
        let { data } = await spotifyAPi(`/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        console.log(data);
        await dispatch(getUserInfo(data))

        let dataa = await spotifyAPi(`/me/playlists`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        console.log(dataa, " dataa");
        await dispatch(currenUserPlaylists(dataa.data))


    }
    fetchingUserInfo(token)


}

export const { getUserInfo, setToken ,currenUserPlaylists } = CurrentUserSlice.actions

export default CurrentUserSlice.reducer;

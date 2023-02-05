import { createSlice } from '@reduxjs/toolkit'
import { spotifyAPi } from '../../Components/Axios/Axios'

const initialState = {
    UserId: '',
    currentUser: null,
    playlists: [],
    token: ''
}

export const CurrentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        getUserId: (state, actions) => {
            state.UserId = actions.payload
        },
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

export const handleAsyncUser = (token) => (dispatch, prevState) => {

    const fetchingUserInfo = async (token) => {
        let { data } = await spotifyAPi(`/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        // console.log(data);
        await dispatch(getUserInfo(data))

        let dataa = await spotifyAPi(`/me/playlists`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        // console.log(dataa, " dataa");
        await dispatch(currenUserPlaylists(dataa.data))


    }
    fetchingUserInfo(token)


}

export const checkIsTokenValid = (token) => async (dispatch, prevState) => {
    // console.log(token, " in valid fnc");
    let { data } = await spotifyAPi(`/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    // console.log(data.id, " checkIsTokenValid");
    await dispatch(getUserId(data.id))

}

export const { getUserInfo, setToken, currenUserPlaylists, getUserId } = CurrentUserSlice.actions

export default CurrentUserSlice.reducer;

import { configureStore } from '@reduxjs/toolkit'
import CurrentUserReducer from './SpotifyApi/CurrentUserApi'
import MoreDataReducer from './SpotifyApi/MoreDataApi'
export const store = configureStore({
  reducer: {
    currentUser: CurrentUserReducer,
    moreData: MoreDataReducer
  },
})
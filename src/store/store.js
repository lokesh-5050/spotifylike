import { configureStore } from '@reduxjs/toolkit'
import CurrentUserReducer from './SpotifyApi/CurrentUserApi'
export const store = configureStore({
  reducer: {
    currentUser:CurrentUserReducer
  },
})
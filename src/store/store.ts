import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice'
import {postApi} from "../services/PostService";

// Combine all reducers from application in one place
const rootReducer = combineReducers({
    userReducer,
    // Registrarion RTK Query reducer
    [postApi.reducerPath]: postApi.reducer
})

// function for configuration store (Redux Toolkit)
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
    })
}

// Basic types for app

// Getting type of state
export type RootState = ReturnType<typeof rootReducer>
// Getting type of store
export type AppStore = ReturnType<typeof setupStore>
// Getting type of dispatch
export type AppDispatch = AppStore['dispatch'];
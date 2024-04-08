import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice'

// Combine all reducers from application in one place
const rootReducer = combineReducers({
    userReducer
})

// function for configuration store (Redux Toolkit)
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

// Basic types for app

// Getting type of state
export type RootState = ReturnType<typeof rootReducer>
// Getting type of store
export type AppStore = ReturnType<typeof setupStore>
// Getting type of dispatch
export type AppDispatch = AppStore['dispatch'];
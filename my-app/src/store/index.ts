// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
import products from "./products";
// ** Reducers

export const store = configureStore({
    reducer: {
        products
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

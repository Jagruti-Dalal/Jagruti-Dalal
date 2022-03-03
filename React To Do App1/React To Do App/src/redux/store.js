import { configureStore } from "@reduxjs/toolkit";
import taskSlice from './slice'

export const store= configureStore({
    reducer:{
        tasks:taskSlice
    }
})
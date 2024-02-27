import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {productIdsReducer} from "./reducers/productIdsReducer";

export const store = configureStore({
    reducer: {
        ids: productIdsReducer,
    },
    middleware: [thunk],
})

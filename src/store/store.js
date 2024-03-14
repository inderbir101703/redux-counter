import { configureStore } from "@reduxjs/toolkit";

import {cartReducers} from './cartStore'
import { authReducers } from "./ui-slice";

const Store =configureStore({
    reducer:{
        ui:authReducers,
        cart:cartReducers
    }
})
export default Store

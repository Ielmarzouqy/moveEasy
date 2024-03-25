import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import {carsApi} from "../features/cars/redux/carApiSlice.js";
import carReducer from "../features/cars/redux/carSlice.js";
import moverReducer from "../features/movers/redux/moverSlice.js";
import boxReducer from '../features/boxes/redux/boxSlice.js'
import { moversApi } from "../features/movers/redux/moverApiSlice.js";
import { boxesApi } from "../features/boxes/redux/boxApiSlice.js";
import authReducer from "../features/auth/redux/authSlice.js";
import { authApiSlice } from "../features/auth/redux/authApiSlice.js";




const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    car: carReducer,
    auth: authReducer,
    [authApiSlice.reducerPath]:authApiSlice.reducer,

    [carsApi.reducerPath]:carsApi.reducer,
    mover:moverReducer,
    [moversApi.reducerPath]:moversApi.reducer,
    box:boxReducer,
    [boxesApi.reducerPath]:boxesApi.reducer,

  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(apiSlice.middleware, moversApi.middleware)
      .concat(apiSlice.middleware ,boxesApi.middleware)
      .concat(apiSlice.middleware ,authApiSlice.middleware)

      .concat(apiSlice.middleware, carsApi.middleware),

  devTools: true,
});





export default store;


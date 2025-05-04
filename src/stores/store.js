import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authReducer from "../reducers/authReducer";
import incidentsReducer from "../reducers/incidentsReducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
};

const store = configureStore({
    reducer: {
        auth: authReducer,
        incidents: incidentsReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
});

export default store;
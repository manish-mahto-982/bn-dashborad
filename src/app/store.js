import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "src/features/global/slice";
import { api } from "src/services/client-service/api";

const store = configureStore({
    reducer: {
        global: globalReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (gDM) => gDM().concat(api.middleware)
})

export default store;
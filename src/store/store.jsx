import { configureStore } from "@reduxjs/toolkit";
import { rickAndMortyApi } from "./service/rickAndMorty";

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    //todos los servicios que tenga los voy a atener que concatenar
    return getDefaultMiddleware().concat(rickAndMortyApi.middleware);
  },
});

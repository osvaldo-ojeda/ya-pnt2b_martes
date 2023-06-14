import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rickAndMortyApi = createApi({
  reducerPath: "rinckAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: () => "/character",
    }),
    getOneCharacter: builder.query({
        query: (id) => `/character/${id}`,
      }),
  }),
});

export const { useGetAllCharactersQuery, useGetOneCharacterQuery } = rickAndMortyApi;

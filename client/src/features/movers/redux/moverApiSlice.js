import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moversApi = createApi({
  reducerPath: "moversApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getAllMovers: builder.query({
      query: () => `mover/all-movers`,


    }),
    getMoverDetails: builder.query({
      query: (moverId) => `mover/mover-details/${moverId}`,

    }),
    
    createMover: builder.mutation({
      query: (moverData) => ({
        url: "mover/create-mover",
        method: "POST",
        body: moverData,
      }),
    }),
    
    
  
  }),
});


export const { useGetAllMoversQuery,useGetMoverDetailsQuery , useCreateMoverMutation } = moversApi;
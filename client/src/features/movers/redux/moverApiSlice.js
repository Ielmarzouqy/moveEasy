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
    
  
  }),
});


export const { useGetAllMoversQuery,useGetMoverDetailsQuery  } = moversApi;
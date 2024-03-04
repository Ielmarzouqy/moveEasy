import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moversApi = createApi({
  reducerPath: "moversApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getAllMovers: builder.query({
      query: () => `helper/all-helpers`,


    }),
    
  
  }),
});


export const { useGetAllMoversQuery,  } = moversApi;
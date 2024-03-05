import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const boxesApi = createApi({
  reducerPath: "boxesApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getAllBoxes: builder.query({
      query: () => `box/all-boxes`,


    }),
    
  
  }),
});


export const { useGetAllBoxesQuery,  } = boxesApi;
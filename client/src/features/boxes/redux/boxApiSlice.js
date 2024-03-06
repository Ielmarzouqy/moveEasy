import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const boxesApi = createApi({
  reducerPath: "boxesApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getAllBoxes: builder.query({
      query: () => `box/all-boxes`,


    }),

    createBox: builder.mutation({
      query: (boxData) => ({
        url: "box/create-box",
        method: "POST",
        body: boxData,
      }),
    }),

    // createApartment: builder.mutation({
    //   query: (apartmentData) => ({
    //     url: "/apartment/addapartment",
    //     method: "POST",
    //     body: apartmentData,
    //   }),
    // }),
    
  
  }),
});


export const { useGetAllBoxesQuery, useCreateBoxMutation } = boxesApi;
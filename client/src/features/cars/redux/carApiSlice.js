import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
  reducerPath: "carsApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: () => `cars/all-cars`,


    }),
    
  
  }),
});


export const { useGetAllCarsQuery,  } = carsApi;
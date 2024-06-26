import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: () => `cars/all-cars`,
    }),
    getCarDetails: builder.query({
      query: (carId) => `cars/car-details/${carId}`,
    }),

    createCar: builder.mutation({
      query: (carData) => ({
        url: 'cars/create-car',
        method: 'POST',
        body: carData,
      }),
    }),

    deleteCar: builder.mutation({
      query: (carId) => ({
        url: `cars/delete-car/${carId}`,
        method: "DELETE",
      }),
    }),

    updateCar: builder.mutation({
      query: ({ carId, carData }) => ({
        url: `/cars/update-car/${carId}`,
        method: "PUT",
        body: carData,
      }),
    }),

  }),
});

export const {
  useGetAllCarsQuery,
  useGetCarDetailsQuery,
  useCreateCarMutation,
  useDeleteCarMutation,
  useUpdateCarMutation
} = carsApi;

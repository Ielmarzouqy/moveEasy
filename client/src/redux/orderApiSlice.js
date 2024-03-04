import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => `order/orderPending`,


    }),
    
    confirmOrder: builder.mutation({

        query: ({ params: { _id } }) => ({

          url: `order/confirm/${_id}`,
          method: 'PUT', // or 'PUT' or 'PATCH' based on your API
        }),
      }),
  }),
});


export const { useGetAllOrdersQuery, useConfirmOrderMutation } = ordersApi;
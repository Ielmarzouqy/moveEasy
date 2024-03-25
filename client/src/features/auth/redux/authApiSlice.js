import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApiSlice = createApi({
  reducerPath: 'authApiSlice',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/',

    // prepareHeaders: (headers, { getState }) => {
    //   return headers;
    // },
    // credentials: 'include',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'user/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    register: builder.mutation({
      query: (credentials) => ({
        url: 'user/register',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: 'user/logout',
        method: 'POST',
      }),
    }),

    
    getDashboard: builder.query({
      query: () => ({
        url: 'user/dashboard',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation , useGetDashboardQuery} =
  authApiSlice;

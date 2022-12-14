import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const tourApi = createApi({
  reducerPath: 'tourApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://explore9ja.onrender.com/api/v1/9ja-tours' }),
  endpoints: (builder) => ({
    getAllTours: builder.query({
      query: () => "/tours",
    }),
  }),
})

export const {useGetAllToursQuery} = tourApi
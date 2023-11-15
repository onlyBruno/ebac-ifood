import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<IRestaurants[], void>({
      query: () => "restaurantes",
    }),
  }),
});

export const { useGetRestaurantsQuery } = api;

export default api;

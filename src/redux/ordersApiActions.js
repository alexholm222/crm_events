import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const token = document.getElementById('root_events')?.getAttribute('token');
const baseURL = process.env.REACT_APP_BASE_URL;

export const eventsApiActions = createApi({
  reducerPath: 'eventsApiActions',
  tagTypes: ['events'],
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? token : '',
      Accept: 'application/json'
    }
  }),
  endpoints: (build) => ({
    getEvents: build.infiniteQuery({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
          lastPageParam + 1,
      },
      query: ({ queryArg, pageParam }) => ({
        url: `workers?page=${pageParam}`,
        method: "GET",
        params: queryArg,
      }),
      transformResponse: (response) => response?.data,
      providesTags: ["List"],
    }),
  })
});

export const {
  useGetEventsInfiniteQuery
} = eventsApiActions;

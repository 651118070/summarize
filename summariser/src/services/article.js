import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Access the API key from environment variables
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// Define the article API
export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/', 
    prepareHeaders: (headers) => {
      // Set required headers for the RapidAPI request
      headers.set('X-RapidAPI-Key', rapidApiKey); // Set the API key
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com'); // Set the host

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define an endpoint to fetch article summaries
    getSummary: builder.query({
      // Use encodeURIComponent to properly encode the article URL
      query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

// Export the hook to lazily fetch the summary
export const { useLazyGetSummaryQuery } = articleApi;

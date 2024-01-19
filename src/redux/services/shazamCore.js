import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react/';

export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '8fd5a81666mshfabfb6754459dcfp12c729jsn2f4e2098bed2');

            return headers;
        }
    }),
    endpoints:(builder) => ({
        getTopCharts: builder.query({query:() => '/charts/track'}),
        
        getSongsBySearch: builder.query({ query: (searchTerm) => `search?local=en-US&term=${searchTerm}` }),
        getArtistDetails: builder.query({ query: (artistId) => `artists/get-details?id=${artistId}` }),
        getSongDetails: builder.query({ query: ({ songid }) => `songs/v2/get-details?id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `songs/get-related-artist?id=${songid}` }),
    })
});

export const { 
    useGetTopChartsQuery,
    useGetSongsBySearchQuery,
    useGetArtistDetailsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery } = shazamCoreApi;
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../models/IPost";
// import {post} from "axios";

// Example RTK Query
// Define a service using a base URL and expected endpoints
// export const postApi = createApi({
//     reducerPath: 'postApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
//     endpoints: (builder) => ({
//
//         //query<IPost[], number> - number - is a type argument
//         fetchAllPosts: builder.query<IPost[], number>({
//             query: (limit) => ({
//                 url: `/posts`,
//                 params: {
//                     _limit: limit
//                 }
//             })
//         }),
//     }),
// })

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({

        //query<IPost[], number> - number - is a type argument
        // query is a GET enpoint
        fetchAllPosts: builder.query<IPost[], number>({
            query: (limit) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            }),
            // Need for updating array after creating new Post
            providesTags: ['Post']
        }),
        // mutation is a POST endpoint
        createPost: builder.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: builder.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: builder.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchAllPostsQuery } = postApi
export const { useCreatePostMutation } = postApi
export const { useUpdatePostMutation } = postApi
export const { useDeletePostMutation } = postApi
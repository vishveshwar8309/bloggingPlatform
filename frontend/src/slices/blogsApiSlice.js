import { apiSlice } from './apiSlice';
import { BLOGS_URL } from '../constants';

export const blogsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllBlogs: builder.query({
            query: () => ({
                url: BLOGS_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getBlogData: builder.query({
            query: (blogId) => ({
                url: `${BLOGS_URL}/${blogId}`,

            }),
            keepUnusedDataFor: 5,
        })
    })
})

export const { useGetAllBlogsQuery, useGetBlogDataQuery } = blogsApiSlice;
import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getuserData: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/signin`,
                method: 'POST',
                body: data,
            }),
        }),
        registerUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/register`,
                method: 'POST',
                body: data,
            })
        })
    })
})

export const { useGetuserDataMutation, useRegisterUserMutation } = usersApiSlice;
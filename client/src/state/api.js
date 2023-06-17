import { createApi, fetchBaseQuery } from "@redux.js/toolkit/query/react";

export const api= createApi({
baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL}),
reducerPath: "main",
tagTypes: [],
endpoints:(build)=>({
   postAiText: build.mutation({
    query:(payload)=>({
        url:"openai/text",
        method: "POST",
        body: payload,
    })
   }) 
})

})

export const{
    usePostAiTextMutation
} =api;
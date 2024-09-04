import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../contrants/api_urls';

export const userApi=createApi({
  reducerPath:'userApi',
  baseQuery:fetchBaseQuery({baseUrl:`${baseUrl}/users`}),
  endpoints:(builder)=>({
    loginUser:builder.mutation(({
      query:(q)=>({
        url:'/login',
        body:q,
        method:'POST'

      })
    })),
    registerUser:builder.mutation(({
      query:(q)=>({
        url:'/register',
        body:q,
        method:'POST'
      }),
     
    })),
    updateProfile:builder.mutation(({
      query:(q)=>({
        url:`/${q.id}`,
        body:{
          email:q.email,
          fullname:q.fullname
        },
        header:{
          Authorization:q.token
        },
        method:'PATCH'

      }),
    }))
  })
})

export const {useLoginUserMutation,useRegisterUserMutation,useUpdateProfileMutation}=userApi;
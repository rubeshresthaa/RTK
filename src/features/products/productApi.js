import { createApi } from '@reduxjs/toolkit/query/react';


export const productApi=createApi({
  reducerPath:'productApi',
  baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com'}),

endpoints:(builder)=>({
// first query and second query is different.
  getAllApi:builder.query(({
    query:()=>({

    })
  }))
})
});
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../contrants/api_urls';


export const productApi=createApi({
  reducerPath:'productApi',
  baseQuery:fetchBaseQuery({baseUrl:`${baseUrl}/products`}),

endpoints:(builder)=>({
// first query GET ko lagi and second query  configuration ko lagi
getAllProducts: builder.query({
  query: (q) => ({
    url: '/',
    method: 'GET',
  }),
  providesTags: ['Products'] //cache ma refetch/refresh garauna tag use garcha
}),

// getProductById: builder.query({
//     query: (id) => ({
//       url: `/${id}`,
//       method: 'GET',

//     }),

//   providesTags: ['Products'] //query ma provide,mutation ma invalidates tag
// }),

getProductById: builder.query({
  query: (id) => ({
    url: `/${id}`,
    method: 'GET',

  }),
  providesTags: ['Products']
}),

addProduct: builder.mutation({
  query: (q) => ({
    url: '/',
    body: q.body,
    headers: {
      Authorization: q.token
    },
    method: 'POST',
  }),
  invalidatesTags: ['Products']
}),

updateProduct: builder.mutation({
  query: (q) => ({
    url: `/${q.id}`,
    body: q.body,
    headers: {
      Authorization: q.token
    },
    method: 'PATCH',
  }),
  invalidatesTags: ['Products']
}),


removeProductById: builder.mutation({
  query: (q) => ({
    url: `/${q.id}`,
    headers: {
      Authorization: q.token
    },
    method: 'DELETE',
  }),
  invalidatesTags: ['Products']
}),
})
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddProductMutation, useRemoveProductByIdMutation, useUpdateProductMutation } = productApi;
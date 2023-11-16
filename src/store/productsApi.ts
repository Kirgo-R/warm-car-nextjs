import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import { URL_ENDPOINT } from '@/constants/constants'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api/cards?populate=*'
  }),
  endpoints: build => ({
    getProducts: build.query({
      query: () => 'products'
    })
  })
})

export const { useGetProductsQuery } = productsApi

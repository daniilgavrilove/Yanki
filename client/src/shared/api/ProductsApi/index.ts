import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProduct, IProductsData } from "shared/lib/models/IProduct";


export const productsAPI = createApi({
	reducerPath: 'productsAPI',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL + '/api' }),
	tagTypes: ['Product'],
	endpoints: (build) => ({
		getAllProducts: build.query<IProductsData, any>({
			query: ([page, limit, categoryId]) => ({
				url: `/products/`,
				params: {
					page,
					limit,
					categoryId
				}
			}),
			providesTags: result => ['Product']
		}),
		getOneProduct: build.query<IProduct, string | undefined>({
			query: (slug) => ({
				url: `/products/${slug}`,

			}),
			providesTags: result => ['Product']
		}),
		createOneProduct: build.mutation<FormData, FormData>({
			query: (product) => ({
				url: `/products`,
				method: 'POST',
				body: product,

			}),

			invalidatesTags: ['Product']
		}),
		// updatePost: build.mutation<IPost, IPost>({
		// 	query: (post) => ({
		// 		url: `/posts/${post.id}`,
		// 		method: 'PUT',
		// 		body: post
		// 	}),
		// 	invalidatesTags: ['Post']
		// }),
		// deletePost: build.mutation<IPost, IPost>({
		// 	query: (post) => ({
		// 		url: `/posts/${post.id}`,
		// 		method: 'DELETE',
		// 	}),
		// 	invalidatesTags: ['Post']
		// }),
	})
})
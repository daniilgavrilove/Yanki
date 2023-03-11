import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategory } from "shared/lib/models/ICategory";


export const categoriesAPI = createApi({
	reducerPath: 'categoriesAPI',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL + '/api' }),
	tagTypes: ['Category'],
	endpoints: (build) => ({
		getAllCategories: build.query<ICategory[], string>({
			query: () => ({
				url: `/categories`,
			}),
			providesTags: result => ['Category']
		}),
		createOneCategory: build.mutation<FormData, FormData>({
			query: (category) => ({
				url: `/categories`,
				method: 'POST',
				body: category
			}),
			invalidatesTags: ['Category']
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
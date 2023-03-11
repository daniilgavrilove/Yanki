import { ProductCard } from '../../../entities/ProductCard'
import React, { useState } from 'react'
import { Container, HTag } from 'shared'
import { productsAPI } from 'shared/api/ProductsApi'
import { SimpleSlider } from 'shared/ui/Sliders'
import styles from './index.module.scss'
import { Product } from 'widgets'
import { FilteredAndSortedProducts } from './FilteredAndSortedProducts'
import { useAppSelector } from 'shared/lib/hooks/redux'
import { ProductsSkeleton } from './Skeleton'

export const Products = () => {

	const { categoryActiveFilter } = useAppSelector(state => state.filterSlice)

	const [page, setPage] = useState('')
	const [limit, setLimit] = useState('')
	const [categoryId, setCategoryId] = useState('')

	const { data, isLoading } = productsAPI.useGetAllProductsQuery([page, limit, categoryActiveFilter])
	const products = data?.rows


	return (
		<div className={ styles.products }>
			{ products && <FilteredAndSortedProducts products={ products } /> }
			{ isLoading && Array.from([6]).map(() => (
				<ProductsSkeleton />
			)) }
		</div>
	)
}

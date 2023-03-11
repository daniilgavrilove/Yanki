import { filterSlice } from 'features/filters/model/state/filterSlice'
import React, { useEffect, useState } from 'react'

import styles from './index.module.scss'
import { SizeFilterProps } from './index.props'
import { MultipleSelect, Popper } from 'shared'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux'



export const sizesData = [
	{ id: 1, label: 'XS' },
	{ id: 2, label: 'S' },
	{ id: 3, label: 'M' },
	{ id: 4, label: 'L' },
	{ id: 5, label: 'XL' },
	{ id: 6, label: 'XXL' },
]

export const SizeFilter = () => {

	const dispatch = useAppDispatch()
	const { setSizeActiveFilter, unsetSizeFilter } = filterSlice.actions
	const { sizeActiveFilter } = useAppSelector(state => state.filterSlice)


	const getActiveFilters = (filterLabel: string) => {
		dispatch(setSizeActiveFilter(filterLabel))
	}

	const unsetFilter = (e: any) => {
		e.stopPropagation()
		dispatch(unsetSizeFilter())
	}

	return (
		<MultipleSelect
			optionsType='checkboxes'
			title='Размер'
			itemsArr={ sizesData }
			activeItems={ sizeActiveFilter }
			getActiveItem={ getActiveFilters }
			textColor='var(--main-color)'
			arrowColor='var(--brown)'
			unsetFilter={ unsetFilter }
		/>
	)
}


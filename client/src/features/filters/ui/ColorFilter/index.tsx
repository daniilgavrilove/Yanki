import { filterSlice } from 'features/filters/model/state/filterSlice'
import React, { useEffect, useState } from 'react'

import styles from './index.module.scss'
import { ColorFilterProps } from './index.props'
import { MultipleSelect, Popper } from 'shared'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux'

const colorsData = [
	{ id: 1, label: 'Белый' },
	{ id: 2, label: 'Чёрный' },
	{ id: 3, label: 'Синий' },
	{ id: 4, label: 'Красный' },
]


export const ColorFilter = () => {

	const dispatch = useAppDispatch()
	const { setColorActiveFilter, unsetColorFilter } = filterSlice.actions
	const { colorActiveFilter } = useAppSelector(state => state.filterSlice)


	const getActiveFilters = (filterLabel: string) => {
		dispatch(setColorActiveFilter(filterLabel))
	}

	const unsetFilter = (e: any) => {
		e.stopPropagation()
		dispatch(unsetColorFilter())
	}

	return (
		<MultipleSelect
			optionsType='checkboxes'
			title='Цвет'
			itemsArr={ colorsData }
			activeItems={ colorActiveFilter }
			getActiveItem={ getActiveFilters }
			textColor='var(--main-color)'
			arrowColor='var(--brown)'
			unsetFilter={ unsetFilter }
		/>
	)
}


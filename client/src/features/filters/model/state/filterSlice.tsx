import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilterState } from './FilterState.props'

export const initialState = {
	colorActiveFilter: [],
	priceActiveFilter: [0, 80000],
	sizeActiveFilter: [],
	sortActiveFilter: 'onDefault',
	categoryActiveFilter: undefined,
} as FilterState

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setColorActiveFilter(state, action: PayloadAction<string>) {
			if (state.colorActiveFilter.includes(action.payload)) {
				state.colorActiveFilter = state.colorActiveFilter.filter((element) => element !== action.payload)
			} else {
				state.colorActiveFilter = [...state.colorActiveFilter, action.payload]
			}
		},
		unsetColorFilter(state) {
			state.colorActiveFilter = []
		},
		setPriceActiveFilter(state, action: PayloadAction<[number, number]>) {
			state.priceActiveFilter = action.payload
		},
		setSizeActiveFilter(state, action: PayloadAction<string>) {
			if (state.sizeActiveFilter.includes(action.payload)) {
				state.sizeActiveFilter = state.sizeActiveFilter.filter((element) => element !== action.payload)
			} else {
				state.sizeActiveFilter = [...state.sizeActiveFilter, action.payload]
			}
		},
		unsetSizeFilter(state) {
			state.sizeActiveFilter = []
		},
		setSortActiveFilter(state, action: PayloadAction<string>) {
			state.sortActiveFilter = action.payload
		},
		setCategoryActiveFilter(state, action: PayloadAction<number>) {
			state.categoryActiveFilter = action.payload
		},
		unsetCategoryActiveFilter(state) {
			state.categoryActiveFilter = undefined
		},
	},
})


export default filterSlice.reducer
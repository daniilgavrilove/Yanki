import { filterSlice } from 'features/filters/model/state/filterSlice'
import React, { useEffect, useState } from 'react'
import { ActiveItemLabel, Popper, RadioGroup } from 'shared'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux'

import styles from './index.module.scss'
import { SortArrProps, SortProps } from './index.props'

const sortArr = [
	{ id: 0, label: 'По умолчанию', value: 'onDefault' },
	{ id: 1, label: 'По возрастанию', value: 'onIncrease' },
	{ id: 2, label: 'По убыванию', value: 'onDecrease' },
	{ id: 3, label: 'По релевантности', value: 'onRelevant' },
	{ id: 4, label: 'По популярности', value: 'onPopular' },

]

const SortFilter = () => {

	const dispatch = useAppDispatch()
	const { sortActiveFilter } = useAppSelector(state => state.filterSlice)
	const { setSortActiveFilter } = filterSlice.actions
	const [activeFilterLabel, setActiveFilterLabel] = useState<string>('по умолчанию')



	const getActiveFilter = (filterValue: string, filterName: string) => {
		setActiveFilterLabel(filterName.toLowerCase())
		dispatch(setSortActiveFilter(filterValue))
	}



	return (

		<Popper
			width='LikeParent'
			arrowColor='var(--brown)'
			title={
				<>
					Сортировать
					<ActiveItemLabel
						resetable={ false }
						activeItems={ [activeFilterLabel] }
					/>
				</>
			}
			children={
				<RadioGroup
					activeOption={ sortActiveFilter }
					optionsArr={ sortArr }
					getActiveOption={ getActiveFilter }
				/>
			}
		/>

	)
}

export default SortFilter
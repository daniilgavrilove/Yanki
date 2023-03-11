
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { filterSlice, initialState } from 'features/filters/model/state/filterSlice';
import { ActiveItemLabel, MuiRangeSlider, MultipleSelect, Popper } from 'shared';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux';
import styles from './index.module.scss'

export default function PriceFilter() {

	const dispatch = useAppDispatch()
	const { priceActiveFilter } = useAppSelector(state => state.filterSlice)
	const { setPriceActiveFilter } = filterSlice.actions


	const [active, setActive] = useState<boolean>(false)

	useEffect(() => {
		const isArrSame = (initialState.priceActiveFilter.length == priceActiveFilter.length) && initialState.priceActiveFilter.every((element, index) => element === priceActiveFilter[index])
		!isArrSame ? setActive(true) : setActive(false)
	}, [priceActiveFilter])

	const unsetFilter = (e: any) => {
		e.stopPropagation()
		dispatch(setPriceActiveFilter(initialState.priceActiveFilter))
		setActive(false)
	}

	const getValues = (valuesArr: any) => {
		dispatch(setPriceActiveFilter(valuesArr))

	}

	return (

		<Popper
			width='LikeParent'
			arrowColor='var(--brown)'
			title={
				<>
					Цена
					<ActiveItemLabel
						activeItems={ active ? priceActiveFilter : [] }
						handleCrossClick={ unsetFilter }
					/>
				</>
			}
			children={
				<div className={ styles.rangeSlider }>
					<MuiRangeSlider

						values={ priceActiveFilter }
						getValues={ getValues }
					/>
				</div>
			}
		/>

	);
}
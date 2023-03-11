import cn from 'classnames'
import { SimpleSelect } from 'shared/ui/SimpleSelect'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux'
import { currencySlice } from '../model/currencySlice'


import styles from './index.module.scss'
import { ToggleCurrencyProps } from './index.props'

const currencyArr = [
	{ id: 1, name: 'RUB' },
	{ id: 2, name: 'EUR' },
	{ id: 3, name: 'USD' },
]



export const ToggleCurrency = ({ className, textColor, arrowColor }: ToggleCurrencyProps) => {

	const dispatch = useAppDispatch()
	const { setActiveCurrency } = currencySlice.actions
	const { currency } = useAppSelector(state => state.currencySlice)

	const getActiveItem = (currency: string) => {
		dispatch(setActiveCurrency(currency))
	}

	return (
		<SimpleSelect

			textColor={ textColor }
			className={ className }
			activeItem={ currency }
			getActiveItem={ getActiveItem }
			itemsArr={ currencyArr }
			arrowColor={ arrowColor }
		/>
	)
}

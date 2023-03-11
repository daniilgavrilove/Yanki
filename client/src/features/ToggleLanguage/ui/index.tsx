import cn from 'classnames'
import { SimpleSelect } from 'shared/ui/SimpleSelect'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux'
import { languageSlice } from '../model/languageSlice'


import styles from './index.module.scss'
import { ToggleLanguageProps } from './index.props'

const langArr = [
	{ id: 1, name: 'RUS' },
	{ id: 2, name: 'ENG' },
]



export const ToggleLanguage = ({ className }: ToggleLanguageProps) => {

	const dispatch = useAppDispatch()
	const { setActiveLang } = languageSlice.actions
	const { language } = useAppSelector(state => state.languageSlice)

	const getActiveItem = (lang: string) => {
		dispatch(setActiveLang(lang))
	}

	return (
		<SimpleSelect
			activeItem={ language }
			getActiveItem={ getActiveItem }
			itemsArr={ langArr }
			arrowColor='var(--white)'
		/>
	)
}

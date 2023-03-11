import cn from 'classnames'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux'
import { Burger } from 'shared/ui/Burger'
import { burgerSlice } from '../model/burgerSlice'

import styles from './index.module.scss'
import { ToggleMenuProps } from './index.props'


export const ToggleMenu = ({ className }: ToggleMenuProps) => {

	const dispatch = useAppDispatch()
	const { open } = useAppSelector(state => state.burgerSlice)
	const { toggleMenu } = burgerSlice.actions

	const handleClick = () => {
		dispatch(toggleMenu())

	}
	return (
		<Burger onClick={ handleClick } open={ open } />
	)
}

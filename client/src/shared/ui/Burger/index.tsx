import cn from 'classnames'

import styles from './index.module.scss'
import { BurgerProps } from './index.props'


export const Burger = ({ className, onClick, open }: BurgerProps) => {
	return (
		<div
			onClick={ onClick }
			className={ cn(styles.burger, {
				[styles.menuOpen]: open,
			}) }><span /></div>
	)
}

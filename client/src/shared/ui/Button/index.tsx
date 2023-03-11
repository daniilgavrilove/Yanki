import cn from 'classnames'

import styles from './index.module.scss'
import { ButtonProps } from './index.props'
import { ReactComponent as Heart } from './heart.svg'
import { ReactComponent as Arrow } from './arrow.svg'



export const Button = ({ children, className, appearance, onClick, heartColor = '', arrowColor = '' }: ButtonProps) => {
	return (
		<div onClick={ onClick } className={ cn(styles.button, className, {
			[styles.fill]: appearance === 'fill',
			[styles.transparent]: appearance === 'transparent',
		}) }>
			{ heartColor && <Heart fill={ heartColor } /> }
			{ children }
			{ arrowColor && <Arrow fill={ arrowColor } /> }

		</div>
	)
}

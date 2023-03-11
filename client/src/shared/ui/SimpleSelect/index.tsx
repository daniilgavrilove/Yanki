import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { useOutsideClick } from 'shared/lib/hooks/useOutsideClick'
import { ReactComponent as Arrow } from './arrow.svg'

import styles from './index.module.scss'
import { SimpleSelectProps } from './index.props'


export const SimpleSelect = ({ className, itemsArr, activeItem, getActiveItem, textColor = 'white', arrowColor = 'white' }: SimpleSelectProps) => {


	const [open, setOpen] = useState(false)
	const select = useRef<HTMLDivElement | null>(null)

	useOutsideClick(select, () => setOpen(false))


	const handleOptionClick = (name: string) => {
		getActiveItem(name)
		setOpen(false)
	}
	const handleToggle = () => {
		if (open) setOpen(false)
		else setOpen(true)
	}

	return (


		<div ref={ select } className={ cn(styles.select, className) }>
			<div
				style={ { color: textColor } }
				onClick={ handleToggle }
				className={ styles.title }>
				{ activeItem }
				{ arrowColor &&
					<Arrow
						className={ cn(styles.arrow, {
							[styles.open]: open
						}) }
						fill={ arrowColor } />
				}
			</div>
			<div
				className={ cn(styles.list, {
					[styles.open]: open,
				}) }>{
					<div className={ styles.options }>
						{ itemsArr.map((element, index) => (
							<div
								key={ element.id }
								className={ styles.option }
								onClick={ () => handleOptionClick(element.name) }
							>
								{ element.name }
							</div>
						)) }
					</div>
				}</div>
		</div>
	)
}

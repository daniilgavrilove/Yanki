import cn from 'classnames'
import { useState } from 'react'
import { useEffect } from 'react'
import { createRef, useRef } from 'react'
import { useOutsideClick } from 'shared/lib/hooks/useOutsideClick'
import { ReactComponent as Arrow } from './arrow.svg'

import styles from './index.module.scss'
import { PopperProps } from './index.props'


export const Popper = ({ children, className, width, title, isOpen, arrowColor = '' }: PopperProps) => {

	const [open, setOpen] = useState(false)
	const popper = useRef<HTMLDivElement | null>(null)

	useOutsideClick(popper, () => setOpen(false))
	useEffect(() => {
		isOpen && setOpen(isOpen)

	}, [])

	const handleClick = () => {
		if (open) setOpen(false)
		else setOpen(true)
	}


	return (
		<div ref={ popper } className={ cn(styles.popper, className) }>
			<div
				onClick={ handleClick }
				className={ styles.title }>
				{ title }
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
					[styles.fullWidth]: width === '100vw',
				}) }>{ children }</div>
		</div>
	)
}

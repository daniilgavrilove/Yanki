import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { useOutsideClick } from 'shared/lib/hooks/useOutsideClick'
import { ActiveItemLabel } from '../ActiveItemLabel'
import { Checkbox } from '../Checkbox'
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Cross } from './cross.svg'

import styles from './index.module.scss'
import { ActiveItemLabelProps, MultipleSelectProps } from './index.props'


export const MultipleSelect = ({
	className,
	title,
	itemsArr,
	activeItems,
	getActiveItem,
	textColor = 'white',
	arrowColor = 'white',
	unsetFilter,
	optionsType
}: MultipleSelectProps) => {


	const [open, setOpen] = useState(false)
	const select = useRef<HTMLDivElement | null>(null)

	useOutsideClick(select, () => setOpen(false))

	const handleOptionClick = (name: string) => {
		getActiveItem(name)
	}
	const handleToggle = () => {
		if (open) setOpen(false)
		else setOpen(true)
	}

	const checkboxes =

		<div className={ styles.options } >
			{
				itemsArr.map((element, index) => (
					<Checkbox
						label={ element.label }
						checked={ activeItems.includes(element.label) }
						onChange={ (e) => handleOptionClick(element.label) }
					/>
				))
			}
		</div >

	return (


		<div ref={ select } className={ cn(styles.select, className) }>
			<div
				style={ { color: textColor } }
				onClick={ handleToggle }
				className={ styles.title }>

				{ title }
				<ActiveItemLabel
					activeItems={ activeItems }
					handleCrossClick={ unsetFilter }
				/>
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
				}) }>
				{ optionsType === 'checkboxes' && checkboxes

				}
			</div>
		</div>
	)
}




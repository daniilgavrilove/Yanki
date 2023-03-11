
import { ReactComponent as Cross } from './cross.svg'

import styles from './index.module.scss'
import { ActiveItemLabelProps } from './index.props'


export const ActiveItemLabel = ({ activeItems, handleCrossClick, resetable = true }: ActiveItemLabelProps) => {
	if (activeItems.length && typeof activeItems[0] === 'string') {
		return (
			<div className={ styles.activeItemLabel }>
				{ activeItems.length === 1 ? activeItems[0] : activeItems.length }
				{ resetable && <p onClick={ handleCrossClick }>{ <Cross /> }</p> }
			</div>
		)
	}
	if (typeof activeItems[0] === 'number') {
		return (
			<div className={ styles.activeItemLabel }>
				{ activeItems.length !== 0 && activeItems[0] + ' – ' + activeItems[1] }
				{ resetable && <p onClick={ handleCrossClick }>{ <Cross /> }</p> }
			</div>
		)
	}
	else {
		return <></>
	}

}

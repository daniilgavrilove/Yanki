import cn from 'classnames'

import styles from './index.module.scss'
import { CheckboxProps } from './index.props'


export const RadioGroup = ({ optionsArr, className, activeOption, getActiveOption }: CheckboxProps) => {

	return (
		<div className={ cn(styles.options, className) }>
			{ optionsArr.map(({ id, label, value }, index) => (
				<div key={ index } className={ styles.item }>
					<input
						onChange={ () => getActiveOption(value, label, id) }
						hidden id={ value }
						className={ styles.input }
						checked={ activeOption === value }
						type="radio" value={ value }
						name="option" />
					<label
						htmlFor={ value }
						className={ styles.label }					>
						<span className={ styles.text }>{ label }</span>
					</label>
				</div>
			)) }
		</div>
	)
}

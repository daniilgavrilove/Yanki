import cn from 'classnames'

import styles from './index.module.scss'
import { CheckboxProps } from './index.props'


export const Checkbox = ({ label, className, checked, onChange }: CheckboxProps) => {
	return (
		<div className={ cn(styles.checkbox, className) }>
			<input id={ label } className={ styles.input } type="checkbox" checked={ checked } onChange={ onChange } />
			<label htmlFor={ label } className={ styles.label }><span className={ styles.text }>{ label }</span></label>
		</div>
	)
}

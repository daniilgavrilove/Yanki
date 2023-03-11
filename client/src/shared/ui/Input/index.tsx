import cn from 'classnames'
import { useState } from 'react'
import { ReactComponent as SearchImg } from './search.svg'


import styles from './index.module.scss'
import { InputProps } from './index.props'


export const Input = ({ className, placeholder, value, onChange }: InputProps) => {
	const [placeholderState, setPlaceholder] = useState(placeholder)

	return (
		<input
			placeholder={ placeholderState }
			value={ value }
			onChange={ onChange }
			className={ cn(styles.singleInput, className) }
			onFocus={ () => setPlaceholder('') }
			onBlur={ () => setPlaceholder(placeholder) }
		/>

	)
}

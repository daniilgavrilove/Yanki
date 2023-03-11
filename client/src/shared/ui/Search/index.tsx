import cn from 'classnames'
import { useState } from 'react'
import { ReactComponent as SearchImg } from './search.svg'


import styles from './index.module.scss'
import { SearchProps } from './index.props'


export const Search = ({ className, placeholder, value, onChange }: SearchProps) => {
	const [placeholderState, setPlaceholder] = useState(placeholder)

	return (
		<form className={ cn(styles.search, className) }>
			<input
				placeholder={ placeholderState }
				value={ value }
				onChange={ onChange }
				className={ styles.input }
				onFocus={ () => setPlaceholder('') }
				onBlur={ () => setPlaceholder(placeholder) }
			/>
			<button className={ styles.button }><SearchImg fill='var(--main-color)' /></button>
		</form>

	)
}

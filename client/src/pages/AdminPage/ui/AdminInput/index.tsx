import React, { Dispatch, SetStateAction } from 'react'
import { Input } from 'shared'
import { InputProps } from 'shared/ui/Input/index.props'
import styles from './index.module.scss'
import cn from 'classnames'

interface AdminInputProps extends InputProps {
	type?: string
	title: string
	//setValue: any
	onChange: (e: any) => void
	multiple?: boolean
	className?: string

}

export const AdminInput = ({ title, value, onChange, type = 'text', multiple, className }: AdminInputProps) => {
	return (
		<div className={ cn(styles.adminLabel, className) }>
			<div className={ styles.label }>{ title }</div>
			{ type === 'file'
				? <input onChange={ onChange } type={ type } multiple={ multiple } />
				: <Input onChange={ onChange } value={ value } placeholder={ `Введите ` + title } />
			}
		</div>
	)
}

import cn from 'classnames'
import { Button } from 'shared'
import { useInput } from 'shared/lib/hooks/useInput'
import { Input } from 'shared/ui/Input'

import styles from './index.module.scss'
import { SignUpProps } from './index.props'



export const SignUp = ({ className }: SignUpProps) => {
	const email = useInput('')
	return (
		<div className={ cn(styles.signUp, className) }>
			<Input { ...email } placeholder='Введите email' />
			<Button appearance='fill' children='Подписаться' />
		</div>
	)
}


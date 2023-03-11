import cn from 'classnames'
import { Button } from 'shared'
import { useInput } from 'shared/lib/hooks/useInput'
import { Input } from 'shared/ui/Input'

import styles from './index.module.scss'
import { AddToCartProps } from './index.props'



export const AddToCart = ({ className }: AddToCartProps) => {

	const addToCart = () => {
		console.log(45);

	}

	return (
		<Button appearance='fill' children='В корзину' onClick={ addToCart } />
	)
}


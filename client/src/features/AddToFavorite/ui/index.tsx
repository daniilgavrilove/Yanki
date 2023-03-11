import cn from 'classnames'
import { Button, FavoriteButton } from 'shared'
import { useInput } from 'shared/lib/hooks/useInput'
import { Input } from 'shared/ui/Input'

import styles from './index.module.scss'
import { AddToFavoriteProps } from './index.props'



export const AddToFavorite = ({ className, appearance }: AddToFavoriteProps) => {

	const addToFavorite = () => {
		console.log('Add To favorite');

	}

	switch (appearance) {
		case 'productCard': return <FavoriteButton onClick={ addToFavorite } className={ className } />
		case 'productPage': return <Button heartColor='var(--brown)' appearance='transparent' children='В избранное' onClick={ addToFavorite } className={ className } />


		default: return <></>
	}
}


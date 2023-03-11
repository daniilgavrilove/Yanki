import cn from 'classnames'

import styles from './index.module.scss'
import { FavoriteButtonProps } from './index.props'
import { ReactComponent as Heart } from './heart.svg'


export const FavoriteButton = ({ className, onClick }: FavoriteButtonProps) => {
	return (
		<div onClick={ onClick } className={ cn(styles.favoriteButton, className) }>
			<Heart fill='var(--white)' />
		</div>
	)
}

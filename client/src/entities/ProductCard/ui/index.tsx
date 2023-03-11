import cn from 'classnames'
import { Link } from 'react-router-dom'
import { FavoriteButton } from 'shared'
import { PaginationSlider } from 'shared/ui/Sliders'

import styles from './index.module.scss'
import { ProductCardProps } from './index.props'




export const ProductCard = ({ product, addToCard }: ProductCardProps) => {
	const { title, slug, images, isNew, price, sizes, colors } = product
	return (
		<div className={ styles.productCard }>
			{ addToCard }
			<PaginationSlider
				imagesArr={ images }
				slug={ slug }
				title={ title }
			/>

			<div className={ styles.productInfo }>
				<div className={ styles.title }><Link to={ slug }>{ title }</Link> { isNew && <p>NEW</p> }</div>
				<div className={ styles.price }>{ price } руб</div>
				<div className={ styles.sizes }>
					{ sizes.map((size, index) => (<p key={ index }>{ size }</p>)) }
				</div>
				<div className={ styles.colors }>
					{ colors.map((color) => (<p style={ { backgroundColor: color.value } } key={ color.id }></p>)) }
				</div>
			</div>
		</div>
	)
}

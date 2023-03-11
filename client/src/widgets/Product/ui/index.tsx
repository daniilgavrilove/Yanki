import React from 'react'
import { Container, HTag } from 'shared'
import { SimpleSlider } from 'shared/ui/Sliders'
import styles from './index.module.scss'
import img from './img.jpg'
import { ProductCard } from '../../../entities'
import { ProductProps } from './index.props'
import { AddToFavorite } from 'features/AddToFavorite'

export const Product = ({ product }: ProductProps) => {


	return (
		<ProductCard
			addToCard={ <AddToFavorite appearance='productCard' className={ styles.favoriteButton } /> }
			product={ product }
		/>
	)
}

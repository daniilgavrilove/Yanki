import React, { useState } from 'react'
import { Container, HTag, MuiAccordion, SimpleSelect } from 'shared'
import { SimpleSlider } from 'shared/ui/Sliders'
import styles from './index.module.scss'
import { ProductInfoProps } from './index.props'
import cn from 'classnames'
import { AddToCart } from 'features'
import { AddToFavorite } from 'features/AddToFavorite'

export const ProductInfo = ({ className, product }: ProductInfoProps) => {
	const { title, slug, colors, sizes, price, description } = product

	const [activeColor, setActiveColor] = useState(colors[0])
	const [activeSize, setActiveSize] = useState('Выберите размер')

	const getActiveSize = (size: string) => {
		setActiveSize(size)
	}

	return (
		<div className={ cn(styles.productInfo, className) }>
			<HTag tag='h3' children={ title } />
			<div className={ cn(styles.price) }>{ price } руб</div>
			<div className={ cn(styles.colors) }>
				{ colors.map((color) => (
					<p
						onClick={ () => setActiveColor(color) }
						style={ { backgroundColor: color.value } }
						className={ cn(styles.color, {
							[styles.activeColor]: color.value === activeColor.value
						}) }
					></p>
				)) }
			</div>

			<div className={ cn(styles.activeColorName) }>Цвет: { activeColor.name }</div>
			<SimpleSelect
				className={ styles.sizesSelect }
				textColor='var(--main-color)'
				arrowColor='var(--brown)'
				getActiveItem={ getActiveSize }
				activeItem={ activeSize }
				itemsArr={ sizes.map((size, index) => ({ id: index, name: size })) }
			/>
			<div className={ cn(styles.actions) }>
				<AddToCart />
				<AddToFavorite appearance='productPage' />
			</div>
			<div className={ cn(styles.description) }>
				<div className={ cn(styles.descriptionTitle) }>Подробности</div>

				{ description.map((accordion, index) => (
					<MuiAccordion

						title={ <div className={ styles.accordionTitle }>{ accordion.name }</div> }
						options={ <div className={ styles.accordionOption }>{ accordion.value }</div> }
					/>
				)) }






			</div>


		</div>
	)
}

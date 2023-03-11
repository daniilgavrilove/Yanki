import React from 'react'
import { Container, HTag } from 'shared'
import { SimpleSlider } from 'shared/ui/Sliders'
import styles from './index.module.scss'
import img from './img.jpg'
import { categoriesAPI } from 'shared/api/CategoriesApi'

export const Categories = () => {

	const { data: categories } = categoriesAPI.useGetAllCategoriesQuery('')



	const slides = categories?.map(({ id, image, name }) => ({ name, link: '#', img: image }))
	if (slides) {
		return (
			<section className={ styles.categories }>
				<Container className={ styles.container }>
					<HTag tag='h2' children='Категории' />
					<SimpleSlider slidesArr={ slides } />
				</Container>
			</section>
		)
	} else return <></>
}
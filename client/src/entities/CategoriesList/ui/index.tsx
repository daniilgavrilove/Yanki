import cn from 'classnames'
import { filterSlice } from 'features/filters'
import { Button, MuiAccordion, Popper } from 'shared'
import { categoriesAPI } from 'shared/api/CategoriesApi'
import { productsAPI } from 'shared/api/ProductsApi'
import { mobile } from 'shared/lib/consts/breakpoints'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux'
import { useWindowWidth } from 'shared/lib/hooks/useWindowWidth'
import { ICategory } from 'shared/lib/models/ICategory'
import { ReactComponent as Arrow } from './arrow.svg'

import styles from './index.module.scss'
import { CategoriesListProps } from './index.props'


export const CategoriesList = ({ className }: CategoriesListProps) => {

	const { data } = categoriesAPI.useGetAllCategoriesQuery('')
	const categories: ICategory[] | undefined = data
	const dispatch = useAppDispatch()
	const { setCategoryActiveFilter, unsetCategoryActiveFilter } = filterSlice.actions
	const { categoryActiveFilter } = useAppSelector(state => state.filterSlice)

	const width = useWindowWidth()

	const handleClick = (categoryId: number) => {
		if (categoryActiveFilter === categoryId) {
			dispatch(unsetCategoryActiveFilter())
		} else {
			dispatch(setCategoryActiveFilter(categoryId))
		}
	}


	if (width > mobile) {
		return (
			<>
				<div className={ cn(styles.categoriesTitle) }>Каталог</div>
				<div className={ cn(styles.categoriesList, className) }>
					{ categories?.map((element, index) => (
						<div
							onClick={ () => handleClick(element.id) }
							key={ index }
							className={ cn(styles.categoriesOption, {
								[styles.active]: element.id === categoryActiveFilter,
							}) }>{ element.name }</div>

					)) }
				</div>
			</>
		)
	} else {
		return (
			<>
				<Popper
					width='LikeParent'
					title={
						<Button arrowColor='var(--white)' className={ styles.categoriesTitle } appearance='fill' children='Каталог' />
					}
					children={
						<div className={ cn(styles.categoriesList, className) }>
							{ categories?.map((element, index) => (
								<div
									onClick={ () => handleClick(element.id) }
									key={ index }
									className={ cn(styles.categoriesOption, {
										[styles.active]: element.id === categoryActiveFilter,
									}) }>{ element.name }</div>

							)) }
						</div>
					}

				/>

			</>
		)
	}
}

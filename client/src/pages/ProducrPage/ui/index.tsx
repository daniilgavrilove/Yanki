import cn from 'classnames'
import { MainLayout } from 'layouts'
import { useParams } from 'react-router-dom'
import { Breadcrumbs, Container } from 'shared'
import { productsAPI } from 'shared/api/ProductsApi'
import { CATALOG_PAGE_PATH, HOME_PAGE_PATH } from 'shared/lib/consts/paths'
import { ThumbsSlider } from 'shared/ui/Sliders'
import { ProductInfo } from 'widgets/ProductInfo'

import styles from './index.module.scss'
import { ProductPageProps } from './index.props'


export const ProductPage = ({ children, className }: ProductPageProps) => {
	const { slug } = useParams()

	const { data: product, isFetching, isError, error, isSuccess } = productsAPI.useGetOneProductQuery(slug)



	const breadcrumbsArr = [
		{ name: 'Главная', link: HOME_PAGE_PATH },
		{ name: 'Каталог', link: CATALOG_PAGE_PATH },
		{ name: product?.title, link: '#' },
	]

	if (isSuccess && product) {

		return (
			<MainLayout>
				<Container className={ styles.mainBlock }>

					<Breadcrumbs breadcrumbsArr={ breadcrumbsArr } />
					<div className={ styles.productBody }>
						<ThumbsSlider name={ product.title } slug={ product.slug } slidesArr={ product.images } />
						<ProductInfo product={ product } />
					</div>

				</Container>
			</MainLayout>
		)
	} else {
		return (
			<MainLayout>
				<Container>

				</Container>
			</MainLayout>
		)
	}
}

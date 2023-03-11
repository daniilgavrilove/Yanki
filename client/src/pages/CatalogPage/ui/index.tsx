import cn from "classnames"
import { CategoriesList } from "../../../entities"
import { MainLayout } from "layouts"
import { Breadcrumbs, Container } from "shared"
import { HOME_PAGE_PATH } from "shared/lib/consts/paths"

import styles from "./index.module.scss"
import { CatalogPageProps } from "./index.props"
import { Filters } from "features"
import { Products } from "widgets"
import { useWindowWidth } from "shared/lib/hooks/useWindowWidth"

const breadcrumbsArr = [
	{ name: 'Главная', link: HOME_PAGE_PATH },
	{ name: 'Каталог', link: '#' },
]


export const CatalogPage = ({ children, className }: CatalogPageProps) => {


	return (
		<MainLayout>
			<Container>

				<Breadcrumbs breadcrumbsArr={ breadcrumbsArr } />

				<div className={ styles.catalogBody }>
					<div className={ styles.catalogColumn }>
						<CategoriesList />
					</div>
					<div className={ styles.catalogColumn }>
						<Filters />
						<Products />
					</div>

				</div>
			</Container>

		</MainLayout>
	)
}

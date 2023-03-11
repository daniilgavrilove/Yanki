import cn from "classnames"
import { MainLayout } from "layouts"
import { Categories, Fullscreen, SignForm } from "widgets"

import styles from "./index.module.scss"
import { HomePageProps } from "./index.props"


export const HomePage = ({ children, className }: HomePageProps) => {
	return (
		<MainLayout>
			<Fullscreen />
			<Categories />
			<SignForm />
		</MainLayout>
	)
}

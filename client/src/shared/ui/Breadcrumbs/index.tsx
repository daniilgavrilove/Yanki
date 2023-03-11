import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Container } from '../Container'
import arrow from './arrow.svg'

import styles from './index.module.scss'
import { BreadcrumbsProps } from './index.props'


export const Breadcrumbs = ({ breadcrumbsArr, className }: BreadcrumbsProps) => {
	return (
		<div className={ cn(styles.breadcrumbs, className) }>
			{ breadcrumbsArr.map((breadcrumb, index, arr) => (
				index === arr.length - 1
					? <div key={ index } className={ styles.breadcrumb }>{ breadcrumb.name }</div>
					: <><Link key={ index } to={ breadcrumb.link } className={ styles.breadcrumb }>{ breadcrumb.name }</Link>
						<img src={ arrow } alt="" />
					</>
			)) }
		</div>

	)
}

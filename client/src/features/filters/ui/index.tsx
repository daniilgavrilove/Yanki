import React from 'react'
import { MuiAccordion } from 'shared'
import { mobile } from 'shared/lib/consts/breakpoints'
import { useWindowWidth } from 'shared/lib/hooks/useWindowWidth'
import { ColorFilter } from './ColorFilter'
import styles from './index.module.scss'
import PriceFilter from './PriceFilter'
import { SizeFilter } from './SizeFilter'
import SortFilter from './SortFilter'
import filterIcon from './filterIcon.svg'

export const Filters = () => {
	const width = useWindowWidth()
	if (width > mobile) {
		return (
			<div className={ styles.filters }>
				<SizeFilter />
				<ColorFilter />
				<PriceFilter />
				<SortFilter />
			</div>
		)
	} else {
		return (
			<MuiAccordion
				alignTitleText='left'
				title={ <div className={ styles.filterTitle }>Фильтры <img src={ filterIcon } /></div> }
				options={
					<div className={ styles.filters }>
						<SizeFilter />
						<ColorFilter />
						<PriceFilter />
						<SortFilter />
					</div>
				}
			/>

		)
	}

}

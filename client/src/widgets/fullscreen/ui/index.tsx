import React from 'react'
import { HTag } from 'shared/ui/HTag'
import bg from './bg.png'
import styles from './index.module.scss'

export const Fullscreen = () => {

	return (
		<section className={ styles.fullscreen }>
			<img className={ styles.bgimg } src={ bg } alt="Шубы" />
			<div className={ styles.textblock }>
				<HTag tag='h1' children='Новая коллекция' />
				<div className={ styles.watch_new }>Смотреть новинки
					<svg width="10" height="7" viewBox="0 0 10 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" />
					</svg>
				</div>
			</div>
		</section>
	)
}


import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Container, MuiAccordion } from 'shared'
import { useWindowWidth } from 'shared/lib/hooks/useWindowWidth'

import styles from './index.module.scss'
import Inst from './inst.svg'
import Telegram from './telegram.svg'

const footerColumns = [
	{
		title: 'КОМПАНИЯ',
		items: [
			{ children: 'О нас', link: '#' },
			{ children: 'Контакты', link: '#' },
		]
	},
	{
		title: 'ПОЛЕЗНОЕ',
		items: [
			{ children: 'Оплата и доставка', link: '#' },
			{ children: 'Условия возврата', link: '#' },
			{ children: 'Бонусная система', link: '#' },
		]
	},
	{
		title: 'ПОКУПАТЕЛЮ',
		items: [
			{ children: 'Избранное', link: '#' },
			{ children: 'Публичная оферта', link: '#' },
			{ children: 'Политика конфиденциальности', link: '#' },
		]
	},
	{
		title: 'КОНТАКТЫ',
		items: [
			{ children: <><img src={ Inst } alt="" /><p>yan.ki</p></>, link: '#' },
			{ children: <><img src={ Telegram } alt="" /><p>yan.ki</p></>, link: '#' },
			{ children: '+38(073) 096 36 44', link: 'tel:+380730963644' },
			{ children: 'info@yanki.com', link: 'mailto:info@yanki.com' },
		]
	},

]

const menuBreakpointWidth = 890
const footerBreakpointWidth = 600


export const Footer = () => {

	const width = useWindowWidth()
	if (width > footerBreakpointWidth) {
		return (
			<div className={ styles.footer }>
				<Container className={ styles.container }>
					{ footerColumns.map((column, index) => (
						<div key={ index } className={ styles.column }>
							<div className={ styles.title }>{ column.title }</div>
							{ column.items.map((item, index) => (
								<div key={ index } className={ styles.item }><Link className={ styles.link } to={ item.link }>{ item.children }</Link></div>
							)) }
						</div>
					)) }
				</Container>
				<div className={ styles.label }>©️ 2021 Yanki. All rights reserved</div>
			</div>
		)
	} else {
		return (
			<div className={ styles.footer }>
				<Container className={ styles.container }>
					{ footerColumns.map((column, index, arr) => (
						index === arr.length - 1
							? <div key={ index } className={ styles.column }>
								<div className={ styles.title }>{ column.title }</div>
								{ column.items.map((item, index) => (
									<div key={ index } className={ styles.item }><Link className={ styles.link } to={ item.link }>{ item.children }</Link></div>
								)) }
							</div>
							: <MuiAccordion
								title={ <div className={ styles.title }>{ column.title }</div> }
								options={
									column.items.map((item, index) => (
										<div key={ index } className={ styles.item }><Link className={ styles.link } to={ item.link }>{ item.children }</Link></div>
									))
								}
							/>

					)) }
				</Container>
				<div className={ styles.label }>©️ 2021 Yanki. All rights reserved</div>
			</div>
		)
	}
}

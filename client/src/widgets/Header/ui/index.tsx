import React, { ReactNode, useRef } from 'react'
import { Container, Popper } from 'shared'
import cn from 'classnames'
import { Search } from 'shared'

import Inst from './icons/inst.svg'
import Telegram from './icons/telegram.svg'

import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { ToggleCurrency, ToggleLanguage, ToggleMenu } from 'features'
import { useDispatch } from 'react-redux'
import { burgerSlice } from 'features/ToggleMenu/model/burgerSlice'
import { useOutsideClick } from 'shared/lib/hooks/useOutsideClick'
import { ReactComponent as Cart } from './icons/cart.svg'
import { ReactComponent as Favorite } from './icons/favorite.svg'
import { ReactComponent as SearchIcon } from './icons/search.svg'
import { ReactComponent as User } from './icons/user.svg'
import { useAppSelector } from 'shared/lib/hooks/redux'
import { useWindowWidth } from 'shared/lib/hooks/useWindowWidth'
import { useInput } from 'shared/lib/hooks/useInput'
import { usePageScrollLock } from 'shared/lib/hooks/usePageScrollLock'
import { useScroll } from 'shared/lib/hooks/useScroll'
import { CATALOG_PAGE_PATH, HOME_PAGE_PATH } from 'shared/lib/consts/paths'
import { menuBreakpointWidth } from 'shared/lib/consts/breakpoints'


const menuIconsArr = [
	{ children: <SearchIcon />, link: '#' },
	{ children: <User fill='var(--white)' />, link: '#' },
	{ children: <Favorite />, link: '#' },
	{ children: <Cart />, link: '#' },
]

const menuTextArr = [
	{ children: 'New', link: '#' },
	{ children: 'Каталог', link: CATALOG_PAGE_PATH },
	{ children: 'О нас', link: '#' },
	{ children: 'Оплата и доставка', link: '#' },
	{ children: 'Условия возврата', link: '#' },
	{ children: 'Контакты', link: '#' },
]

const contacts = [
	{ children: <><img src={ Inst } alt="" /><p>yan.ki</p></>, link: '#' },
	{ children: <><img src={ Telegram } alt="" /><p>yan.ki</p></>, link: '#' },
	{ children: '+38(073) 096 36 44', link: 'tel:+380730963644' },
	{ children: 'info@yanki.com', link: 'mailto:info@yanki.com' },
]

const reduceHeaderScrollVal = 60

export const Header = () => {
	const { open } = useAppSelector(state => state.burgerSlice)
	usePageScrollLock(open)

	const scroll = useScroll()


	const width = useWindowWidth()

	const dispatch = useDispatch()
	const { closeMenu } = burgerSlice.actions
	const header = useRef<HTMLDivElement | null>(null)

	const clickOutHeaderHandler = () => {
		width > menuBreakpointWidth && dispatch(closeMenu())
	}
	useOutsideClick(header, clickOutHeaderHandler)
	if (width > menuBreakpointWidth) {
		return (
			<header ref={ header } className={ cn(styles.header, {
				[styles.scroll]: scroll > reduceHeaderScrollVal,
			}) }>
				<Container className={ styles.container }>
					<Link to={ HOME_PAGE_PATH } className={ styles.logo }>YANKI</Link>
					<div className={ cn(styles.menu) }>
						<ToggleMenu />
						<MenuBody gap='25px' menuItemsArr={ menuTextArr } filter={ [0, 2] } />
						<div className={ styles.actions }>
							<ToggleLanguage />
							<ToggleCurrency />
						</div>
						<MenuBody position='right' gap='30px' menuItemsArr={ menuIconsArr } />
					</div>
				</Container>
				<PcBurgerMenu />
			</header>
		)
	} else {
		return (<>
			<header ref={ header } className={ cn(styles.header, {
				[styles.open]: open,
				[styles.scroll]: scroll > reduceHeaderScrollVal,
			}) }>
				<Container className={ styles.container }>
					<Link to={ HOME_PAGE_PATH } className={ styles.logo }>YANKI</Link>

					<div className={ cn(styles.menu) }>
						<ToggleMenu />
						<div className={ styles.actions }>
							<ToggleLanguage />
						</div>
						<MenuBody filter={ [2, 3] } position='right' gap='30px' menuItemsArr={ menuIconsArr } />
					</div>
				</Container>
			</header>
			<MobileBurgerMenu />
		</>
		)
	}
}

interface MenuBodyProps {
	menuItemsArr: { children: string | ReactNode, link: string }[]
	gap: '25px' | '30px'
	position?: 'left' | 'right'
	filter?: [number, number]

}
const MenuBody = ({ menuItemsArr, position, filter, gap }: MenuBodyProps) => {
	return (
		<nav className={ cn(styles.menuBody, {
			[styles.left]: position === 'left',
			[styles.right]: position === 'right',
		}) }>
			<ul className={ cn(styles.menuItems, {
				[styles.gap25]: gap === '25px',
				[styles.gap30]: gap === '30px',

			}
			) }>
				{ menuItemsArr.map((element, index) => {
					if (filter) {
						return (
							filter[0] <= index && index <= filter[1]
							&& <li key={ index }
								className={ styles.menuItem }><Link to={ element.link } className={ styles.menuLink }>{ element.children }</Link>
							</li>
						)
					} else {
						return (
							<li key={ index }
								className={ styles.menuItem }><Link to={ element.link } className={ styles.menuLink }>{ element.children }</Link>
							</li>)
					}
				}) }
			</ul>
		</nav>
	)
}

const PcBurgerMenu = () => {
	const { open } = useAppSelector(state => state.burgerSlice)

	return (

		<div className={ cn(styles.pcBurgerMenu, {
			[styles.open]: open,
		}) }>
			<Container className={ styles.container }>
				<MenuBody position='left' gap='25px' menuItemsArr={ menuTextArr } filter={ [3, 6] } />
			</Container>
		</div>
	)
}

const MobileBurgerMenu = () => {
	const { open } = useAppSelector(state => state.burgerSlice)
	const search = useInput('')

	return (
		<div onClick={ e => e.stopPropagation() } className={ cn(styles.burgerMenu, {
			[styles.open]: open,
		}) }>
			<Container className={ styles.burgerContainer }>

				<div className={ styles.burgerMenuItem }>
					<Search { ...search } placeholder='Введите ваш запрос' />
					<ToggleCurrency className={ styles.black } textColor='var(--main-color)' arrowColor='var(--main-color)' />
				</div>
				<div className={ styles.burgerMenuItem }>
					<Link className={ styles.burgerMenuLink } to={ menuIconsArr[1].link }><User fill="var(--brown)" /> Личный кабинет</Link>
				</div>
				{ menuTextArr.map((element, index, arr) => (
					index === arr.length - 1
						? <div className={ styles.contacts }>
							<div className={ styles.burgerMenuLink }> Контакты</div>
							{ contacts.map((item, index) => (
								<div >
									<Link className={ styles.contactsLink } key={ index } to={ item.link }>{ item.children }</Link>
								</div>
							)) }
						</div>
						: <div key={ index } className={ styles.burgerMenuItem } >
							<Link className={ styles.burgerMenuLink } to={ element.link }>{ element.children }</Link>
						</div>
				))
				}

			</Container >



		</div >
	)

}

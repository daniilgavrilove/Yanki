import cn from 'classnames'

import styles from './index.module.scss'
import { ContainerProps } from './index.props'


export const Container = ({ children, className }: ContainerProps) => {
	return (
		<div className={ cn(styles.container, className) }>{ children }</div>
	)
}

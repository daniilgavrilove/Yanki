import cn from 'classnames'

import styles from './index.module.scss'
import { IndexProps } from './index.props'


export const Index = ({ children, className }: IndexProps) => {
	return (
		<div className={ cn(styles.index, className) }>{ children }</div>
	)
}

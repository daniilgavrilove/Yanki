import { ReactNode } from "react";

export interface PopperProps {
	className?: string
	title: string | ReactNode
	children: string | ReactNode
	width: '100vw' | 'LikeParent'
	isOpen?: boolean
	arrowColor?: string
}
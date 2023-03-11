import { ReactNode } from "react";

export interface ButtonProps {
	className?: string
	children?: ReactNode
	appearance: 'fill' | 'transparent'
	onClick?: () => void
	heartColor?: string
	arrowColor?: string
}
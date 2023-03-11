
export interface SimpleSelectProps {
	className?: string
	activeItem: string
	getActiveItem: (active: string) => void
	itemsArr: { name: string, id: number }[]
	arrowColor?: string
	textColor?: string
}
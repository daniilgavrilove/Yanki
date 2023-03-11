
export interface MultipleSelectProps {
	className?: string
	activeItems: string[]
	getActiveItem: (active: string) => void
	itemsArr: { label: string, id: number }[]
	arrowColor?: string
	textColor?: string
	title: string
	unsetFilter: (e: any) => void
	optionsType: 'checkboxes' | 'radio' | 'rangeSlider'
}

export interface ActiveItemLabelProps {
	activeItems: string[]
	handleCrossClick: (e: any) => void
}
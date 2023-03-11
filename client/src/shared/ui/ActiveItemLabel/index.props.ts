

export interface ActiveItemLabelProps {
	activeItems: string[] | [number, number]
	handleCrossClick?: (e: any) => void
	resetable?: boolean
}
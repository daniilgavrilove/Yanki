export interface MuiRangeSliderProps {
	values: [number, number]
	getValues: (number: [number, number]) => void
}
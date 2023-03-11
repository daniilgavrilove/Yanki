import { ReactNode } from "react";

export interface CheckboxProps {
	className?: string
	optionsArr: { id: number, label: string, value: string }[]
	activeOption: string | undefined
	getActiveOption: (value: string, label: string, id: number) => void
}
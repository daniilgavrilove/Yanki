import { ReactNode } from "react";

export interface CheckboxProps {
	className?: string
	label: string
	checked: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
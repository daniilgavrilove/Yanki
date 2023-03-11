import { ReactNode } from "react";

export interface InputProps {
	className?: string
	placeholder?: string
	value?: string
	onChange: (e: any) => void

}
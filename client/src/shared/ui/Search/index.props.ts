import { ReactNode } from "react";

export interface SearchProps {
	className?: string
	placeholder: string
	value: string
	onChange: (e: any) => void

}
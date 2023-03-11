import { ReactNode } from "react";

export interface ModalProps {
	open: boolean
	setOpen: (open: boolean) => void
	children: ReactNode
	handleClose: () => void
}
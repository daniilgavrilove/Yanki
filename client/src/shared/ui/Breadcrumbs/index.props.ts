import { ReactNode } from "react";

export interface BreadcrumbsProps {
	className?: string
	breadcrumbsArr: { name: string | undefined, link: string }[]

}
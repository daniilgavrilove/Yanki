import { ReactNode } from "react";
import { IProduct } from "shared/lib/models/IProduct";
import { JsxElement } from "typescript";

export interface ProductCardProps {
	product: IProduct
	addToCard: ReactNode
}
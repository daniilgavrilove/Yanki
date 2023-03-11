export interface IProduct {
	id: number;
	title: string;
	slug: string;
	alt: string;
	price: number;
	isNew: boolean;
	categoryId: number;
	sizes: string[];
	images: string[];
	colors: NameAndValue[];
	description: NameAndValue[];
}

export interface NameAndValue {
	name: string;
	value: string;
	id: number;
}

export interface IProductsData {
	count: number;
	rows: IProduct[];
}



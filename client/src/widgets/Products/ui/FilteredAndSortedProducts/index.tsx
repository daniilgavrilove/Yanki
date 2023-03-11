import { useAppSelector } from "shared/lib/hooks/redux";
import { IProduct } from "shared/lib/models/IProduct";
import { Product } from "widgets/Product/ui";

interface FilAndSorProdProps {
	products: IProduct[]
}

export const FilteredAndSortedProducts = ({ products }: FilAndSorProdProps) => {

	const {
		colorActiveFilter,
		priceActiveFilter,
		sizeActiveFilter,
		sortActiveFilter
	} = useAppSelector(state => state.filterSlice)


	function filterProducts(products: IProduct[]): IProduct[] {
		const filteredBySizeProducts = sizeActiveFilter.length ? products.filter(e => e.sizes.filter(arNum => sizeActiveFilter.includes(arNum)).length) : products
		const filterdByColorProducts = colorActiveFilter.length ? filteredBySizeProducts.filter(e => e.colors.filter(arNum => colorActiveFilter.includes(arNum.name)).length) : filteredBySizeProducts
		const filteredByPriceProducts = filterdByColorProducts.filter(e => e.price > priceActiveFilter[0] && e.price < priceActiveFilter[1])
		return filteredByPriceProducts
	}

	function sortProducts(products: IProduct[], sortActiveFilter: string): IProduct[] {
		switch (sortActiveFilter) {
			case 'onIncrease': return products.sort((a, b) => a.price - b.price)
			case 'onDecrease': return products.sort((a, b) => b.price - a.price)
			case 'onRelevant': return products
			case 'onPopular': return products
			default: return products
		}
	}
	function filterAndSortProducts(products: IProduct[], sortActiveFilter: string) {
		const filteredArr = products && filterProducts(products)
		const sortedAndFilteredArr = filteredArr && sortProducts(filteredArr, sortActiveFilter)
		return sortedAndFilteredArr
	}

	const sortedAndFilteredArr = products && filterAndSortProducts(products, sortActiveFilter)

	return (
		<>
			{ sortedAndFilteredArr?.map((e) => <Product key={ e.id } product={ e } />) }
		</>
	)


}

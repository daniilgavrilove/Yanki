export interface FilterState {
	colorActiveFilter: string[]
	priceActiveFilter: [number, number]
	sizeActiveFilter: string[]
	categoryActiveFilter: number | undefined,
	sortActiveFilter: 'onDefault' | 'onIncrease' | 'onDecrease' | 'onRelevant' | 'onPopular' | string
}



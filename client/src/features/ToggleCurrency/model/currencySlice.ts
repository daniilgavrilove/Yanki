import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CurrencyStateProps {
	currency: string
}
const initialState: CurrencyStateProps = {
	currency: 'RUB'
}

export const currencySlice = createSlice({
	name: 'currencySlice',
	initialState,
	reducers: {
		setActiveCurrency(state, action: PayloadAction<string>) {
			state.currency = action.payload
		},

	}

}
)

export default currencySlice.reducer
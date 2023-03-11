import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LanguageStateProps {
	language: string
}
const initialState: LanguageStateProps = {
	language: 'RUS'
}

export const languageSlice = createSlice({
	name: 'languageSlice',
	initialState,
	reducers: {
		setActiveLang(state, action: PayloadAction<string>) {
			state.language = action.payload
		},

	}

}
)

export default languageSlice.reducer
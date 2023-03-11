import { createSlice } from "@reduxjs/toolkit";

export interface BurgerStateProps {
	open: boolean
}
const initialState: BurgerStateProps = {
	open: false
}

export const burgerSlice = createSlice({
	name: 'BurgerSlice',
	initialState,
	reducers: {
		openMenu(state) {
			state.open = true
		},
		closeMenu(state) {
			state.open = false
		},
		toggleMenu(state) {
			if (state.open === true) {
				state.open = false
			} else {
				state.open = true

			}
		}
	}

}
)

export default burgerSlice.reducer
export const { closeMenu, openMenu, toggleMenu } = burgerSlice.actions
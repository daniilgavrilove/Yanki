import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import filterSlice from "features/filters/model/state/filterSlice";
import currencySlice from "features/ToggleCurrency/model/currencySlice";
import languageSlice from "features/ToggleLanguage/model/languageSlice";
import burgerSlice from "features/ToggleMenu/model/burgerSlice";
import { categoriesAPI } from "shared/api/CategoriesApi";
import { productsAPI } from "shared/api/ProductsApi";

export const store = configureStore({
	reducer: {
		burgerSlice: burgerSlice,
		languageSlice: languageSlice,
		currencySlice: currencySlice,
		filterSlice: filterSlice,
		[productsAPI.reducerPath]: productsAPI.reducer,
		[categoriesAPI.reducerPath]: categoriesAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat([productsAPI.middleware, categoriesAPI.middleware])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

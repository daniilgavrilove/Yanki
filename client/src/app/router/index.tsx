import { createBrowserRouter } from "react-router-dom";
import { AdminPage, CatalogPage, HomePage, ProductPage } from "pages";
import { ADMIN_PAGE_PATH, CATALOG_PAGE_PATH, HOME_PAGE_PATH, PRODUCT_PAGE_PATH } from "shared/lib/consts/paths";

export const router = createBrowserRouter([
	{ path: HOME_PAGE_PATH, element: <HomePage /> },
	{ path: CATALOG_PAGE_PATH, element: <CatalogPage /> },
	{ path: PRODUCT_PAGE_PATH, element: <ProductPage /> },
	{ path: ADMIN_PAGE_PATH, element: <AdminPage /> },

])
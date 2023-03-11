import React, { ReactNode } from 'react'
import { Footer, Header } from 'widgets'

interface MainLayoutProps {
	children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<Header />
			<main>
				{ children }
			</main>
			<Footer />
		</>
	)
}

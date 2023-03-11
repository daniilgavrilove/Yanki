import React, { useEffect } from 'react'
import { useAppSelector } from './redux'

export const usePageScrollLock = (open: boolean) => {
	useEffect(() => {
		open && document.documentElement.classList.add('lock')
		!open && document.documentElement.classList.remove('lock')


	}, [open])

}

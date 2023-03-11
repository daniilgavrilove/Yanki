import { useState } from "react"

export const useInput = (initialValue: any) => {

	const [value, setValue] = useState(initialValue)
	const onChange = (e: any) => {
		setValue(e.target.value)
	}
	return { value, onChange }
}
export const useOneFileInput = (initialValue: any) => {
	const [value, setValue] = useState(initialValue)
	const onChange = (e: any) => {
		setValue(e.target.files[0])
	}
	return { value, onChange }
}
export const useManyFilesInput = (initialValue: any) => {
	const [value, setValue] = useState(initialValue)
	const onChange = (e: any) => {
		setValue(e.target.files)
	}
	return { value, onChange }
}
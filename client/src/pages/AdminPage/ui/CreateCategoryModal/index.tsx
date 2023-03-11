import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal, { } from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { ChangeEvent, useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { categoriesAPI } from 'shared/api/CategoriesApi';
import { AdminInput } from '../AdminInput';
import { Button, MuiModal } from 'shared';
import { useInput } from 'shared/lib/hooks/useInput';


export interface ModalProps {
	open: boolean
	setOpen: (open: boolean) => void
}

export const CreateCategoryModal = ({ open, setOpen }: ModalProps) => {

	const [createCategory, { error, isSuccess, status }] = categoriesAPI.useCreateOneCategoryMutation()
	const [succesAlert, setSuccesAlert] = useState(false)

	const [name, setName] = useState('')
	const [image, setImage] = useState('')


	const handleClose = () => {
		setOpen(false)
		setSuccesAlert(false)

	}
	useEffect(() => {
		setSuccesAlert(false)
		isSuccess && setSuccesAlert(true)
		setName('')
	}, [isSuccess])


	const addCategory = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('image', image)
		createCategory(formData)

	}
	return (
		<MuiModal open={ open } setOpen={ setOpen } handleClose={ handleClose }>
			{ succesAlert && <Alert severity="success">
				<AlertTitle>Успех</AlertTitle>
				<strong>Категория успешно создана!</strong>
			</Alert>
			}
			<Typography id="transition-modal-title" variant="h6" component="h3">
				Создание категории
			</Typography>
			<AdminInput value={ name } onChange={ e => setName(e.target.value) } title='Название категории' />
			<AdminInput type='file' multiple={ false } value={ image } onChange={ e => setImage(e.target.files[0]) } title='Изображение' />
			<Button onClick={ () => addCategory() } appearance='transparent' children='Добавить категорию' />
		</MuiModal>
	)
}

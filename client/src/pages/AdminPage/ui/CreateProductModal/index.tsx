
import Typography from '@mui/material/Typography';
import { ChangeEvent, useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { categoriesAPI } from 'shared/api/CategoriesApi';
import { AdminInput } from '../AdminInput';
import { ActiveItemLabel, Button, Checkbox, HTag, MuiModal, MultipleSelect, Popper, RadioGroup } from 'shared';
import { useInput, useManyFilesInput } from 'shared/lib/hooks/useInput';
import { productsAPI } from 'shared/api/ProductsApi';
import { sizesData } from 'features/filters/ui/SizeFilter';
import { ReactComponent as Cross } from './cross.svg';

import styles from './index.module.scss'


export interface ModalProps {
	open: boolean
	setOpen: (open: boolean) => void
}

export const CreateProductModal = ({ open, setOpen }: ModalProps) => {

	const [createProduct, { error, isSuccess, status }] = productsAPI.useCreateOneProductMutation()
	const { data: categories } = categoriesAPI.useGetAllCategoriesQuery('')
	const [succesAlert, setSuccesAlert] = useState(false)


	const title = useInput('')
	const alt = useInput('')
	const price = useInput(0)
	const [sizes, setSizes] = useState<string[]>([])
	const [isNew, setIsNew] = useState(false)
	const images = useManyFilesInput('')
	const [description, setDescription] = useState<{ name: string, value: string, id: number }[]>([])
	const [color, setColor] = useState<{ name: string, value: string, id: number }[]>([])

	const [categoryId, setCategoryId] = useState<{ label: string, id: number }>({ label: 'Выберите категорию', id: 0 })


	const handleClose = () => {
		setOpen(false)
		setSuccesAlert(false)

	}
	useEffect(() => {
		setSuccesAlert(false)
		isSuccess && setSuccesAlert(true)
	}, [isSuccess])

	const getActiveSizes = (activeFilter: string) => {
		if (sizes.includes(activeFilter)) setSizes(sizes.filter((e) => e !== activeFilter))
		else setSizes([...sizes, activeFilter])
	}

	const unsetSizes = () => {
		setSizes([])
	}

	const getIsNewValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsNew(!isNew)
	}

	const getChosenCategory = (value: string, label: string, id: number) => {
		setCategoryId({ label, id })
	}

	const addDescriptionHandler = () => {
		setDescription([...description, { name: '', value: '', id: Date.now() }])
	}

	const changeDescription = (key: string, value: string, id: number) => {
		setDescription(description.map((item) => item.id === id ? { ...item, [key]: value } : item))
	}
	const deleteDescription = (id: number) => {
		setDescription(description.filter((item) => item.id !== id))
	}
	const addColorHandler = () => {
		setColor([...color, { name: '', value: '', id: Date.now() }])
	}

	const changeColor = (key: string, value: string, id: number) => {
		setColor(color.map((item) => item.id === id ? { ...item, [key]: value } : item))
	}
	const deleteColor = (id: number) => {
		setColor(color.filter((item) => item.id !== id))
	}

	const addProduct = () => {
		const formData = new FormData()
		formData.append('title', title.value)
		formData.append('alt', alt.value)
		formData.append('price', String(price.value))
		formData.append('sizes', JSON.stringify(sizes))
		formData.append('isNew', String(isNew))

		formData.append('description', JSON.stringify(description))
		formData.append('colors', JSON.stringify(color))
		formData.append('categoryId', String(categoryId.id))

		Array.from(images.value).forEach((e: any) => formData.append('images', e))
		createProduct(formData)

	}
	return (
		<MuiModal open={ open } setOpen={ setOpen } handleClose={ handleClose }>
			{ succesAlert && <Alert severity="success">
				<AlertTitle>Успех</AlertTitle>
				<strong>Товар успешно создан!</strong>
			</Alert>
			}
			<div className={ styles.modal }>
				<HTag tag='h2' children='Создание товара' />
				<div className={ styles.divisionLabel }>Общая характеристика</div>

				<AdminInput { ...title } title='Название товара' />
				<AdminInput { ...alt } title='Альт' />
				<AdminInput { ...price } title='Цена' />
				<Checkbox label='NEW' onChange={ getIsNewValue } checked={ isNew } />

				<div className={ styles.divisionLabel }>Детальная информация</div>
				<AdminInput className={ styles.images } type='file' multiple={ true }{ ...images } title='Изображения' />

				<MultipleSelect
					optionsType='checkboxes'
					title='Размер'
					itemsArr={ sizesData }
					activeItems={ sizes }
					getActiveItem={ getActiveSizes }
					textColor='var(--main-color)'
					arrowColor='var(--brown)'
					unsetFilter={ unsetSizes }
				/>

				{ categories?.length
					? < Popper
						width='LikeParent'
						arrowColor='var(--brown)'
						title={
							<>
								Категория
								<ActiveItemLabel
									resetable={ false }
									activeItems={ [categoryId.label] }
								/>
							</>
						}
						children={
							<RadioGroup
								activeOption={ categoryId.label }
								optionsArr={ categories.map(({ id, name }) => ({ id, label: name, value: name })) }
								getActiveOption={ getChosenCategory }
							/>
						}
					/>
					: <></> }
				<div className={ styles.divisionLabel }>Описание</div>
				{ description.map((item, index) => (
					<>
						<AdminInput title='Название' value={ item.name } onChange={ e => changeDescription('name', e.target.value, item.id) } />
						<div style={ { display: 'flex', alignItems: 'center', gap: '20px' } }>
							<AdminInput title='Значение' value={ item.value } onChange={ e => changeDescription('value', e.target.value, item.id) } />
							<Cross onClick={ () => deleteDescription(item.id) } />
						</div>
					</>
				)) }
				<Button onClick={ addDescriptionHandler } className={ styles.addInfoBtn } appearance='fill' children='Добавить описание' />

				<div className={ styles.divisionLabel }>Цвета</div>
				{ color.map((item, index) => (
					<>
						<AdminInput title='Название' value={ item.name } onChange={ e => changeColor('name', e.target.value, item.id) } />
						<div style={ { display: 'flex', alignItems: 'center', gap: '20px' } }>
							<AdminInput title='Значение' value={ item.value } onChange={ e => changeColor('value', e.target.value, item.id) } />
							<Cross onClick={ () => deleteColor(item.id) } />
						</div>
					</>
				)) }
				<Button onClick={ addColorHandler } className={ styles.addInfoBtn } appearance='fill' children='Добавить цвет' />



				<Button className={ styles.addInfoBtn } onClick={ () => addProduct() } appearance='transparent' children='Добавить товар' />
			</div>
		</MuiModal>
	)
}

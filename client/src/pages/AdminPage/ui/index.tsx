
import styles from './index.module.scss'



import { useState } from 'react';
import { MainLayout } from 'layouts';
import { Button, Container } from 'shared';
import { CreateCategoryModal } from './CreateCategoryModal';
import { CreateProductModal } from './CreateProductModal';
export const AdminPage = () => {

	const [productModalOpen, setProductModalOpen] = useState(false);
	const [categortModalOpen, setCategortModalOpen] = useState(false);

	return (
		<>
			<MainLayout>
				<Container className={ styles.adminPageLayout }>
					<Button onClick={ () => setProductModalOpen(true) } appearance='fill' children='Создать товар' />
					<Button onClick={ () => setCategortModalOpen(true) } appearance='fill' children='Создать категорию' />
				</Container>
			</MainLayout>
			<CreateProductModal open={ productModalOpen } setOpen={ setProductModalOpen } />
			<CreateCategoryModal open={ categortModalOpen } setOpen={ setCategortModalOpen } />

		</>
	)
}

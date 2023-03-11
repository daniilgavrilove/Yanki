
import { SignUp } from 'features'
import React from 'react'
import { Container, HTag } from 'shared'
import styles from './index.module.scss'

export const SignForm = () => {
	return (
		<section >
			<Container className={ styles.conteiner }>
				<div className={ styles.signform }>

					<HTag tag='h2' children='Узнайте  первым о новинках' />
					<SignUp />
					<div className={ styles.label }>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.
					</div>
				</div>

			</Container>

		</section>
	)
}


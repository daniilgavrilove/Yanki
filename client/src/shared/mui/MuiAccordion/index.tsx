import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import cn from 'classnames'

import './index.scss'

interface MuiAccordionProps {
	title: JSX.Element
	options: JSX.Element[] | React.ReactNode
	alignTitleText?: 'left' | 'center'
}

export function MuiAccordion({ title, options, alignTitleText }: MuiAccordionProps) {
	return (
		<div>
			<Accordion className='accordion'>
				<AccordionSummary
					className={ cn({
						['left']: alignTitleText === 'left'
					}) }
					expandIcon={ <ExpandMoreIcon /> }
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					{ title }
				</AccordionSummary>
				<AccordionDetails>
					{ options }
				</AccordionDetails>
			</Accordion>

		</div>
	);
}

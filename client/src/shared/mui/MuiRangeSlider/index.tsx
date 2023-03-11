import * as React from 'react';
import { useRef, useEffect, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';


//import './rangeSlider.scss'
import { useState } from 'react';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/redux';
import { MuiRangeSliderProps } from './index.props';

const Input = styled(MuiInput)`
   width: 42px;
`;


export const MuiRangeSlider = ({ values, getValues }: MuiRangeSliderProps) => {
	const inputFirst = useRef<any>()
	const inputSecond = useRef<any>()
	const [minmax, setMinMax] = useState<[number, number]>([0, 0])

	useEffect(() => {
		setMinMax([...values])
	}, [])

	const handleChange = (e: any) => {
		getValues(e.target.value)
	}

	const handleInputChange = () => {

		const firstInputVal = Number(inputFirst?.current?.firstChild?.value)
		const secondInputVal = Number(inputSecond?.current?.firstChild?.value)

		getValues([firstInputVal, secondInputVal])
	};


	return (
		<Box sx={ { width: '200px', flexWrap: 'wrap', justifyContent: 'space-between', display: 'flex' } }>
			<Slider sx={ { flex: '1 1 100%' } }
				getAriaLabel={ () => 'Temperature range' }
				value={ values }
				onChange={ handleChange }
				valueLabelDisplay="on"
				min={ minmax[0] }
				max={ minmax[1] }
			/>

			<Input
				sx={ { width: '30%' } }
				ref={ inputFirst }
				value={ values[0] }
				size="small"
				onChange={ handleInputChange }
				inputProps={ {
					step: 100,
					min: minmax[0],
					max: minmax[1],
					type: 'number',
					'aria-labelledby': 'input-slider',
				} }
			/>
			<Input
				sx={ { width: '30%' } }

				ref={ inputSecond }
				value={ values[1] }
				size="small"
				onChange={ handleInputChange }
				inputProps={ {
					step: 100,
					min: minmax[0],
					max: minmax[1],
					type: 'number',
					'aria-labelledby': 'input-slider',
				} }
			/>
		</Box>
	);
}

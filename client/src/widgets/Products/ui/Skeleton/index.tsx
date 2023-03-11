import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export function ProductsSkeleton() {
	return (
		<Stack spacing={ 1 }>


			{/* For other variants, adjust the size with `width` and `height` */ }
			<Skeleton variant="rectangular" width={ '100%' } height={ 360 } />
			<Skeleton variant="rounded" width={ '100%' } height={ 60 } />
		</Stack>
	);
}

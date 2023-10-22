'use client';

import { FormEvent, useState } from 'react';

export function LocationInput() {
	const [location, setLocation] = useState('');

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log(location);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				className='outline-none text-sm pl-4 bg-transparent placeholder:text-muted-foreground placeholder:text-sm'
				id='location-input'
				value={location}
				placeholder='Search city...'
				name='location'
				onChange={(e) => setLocation(e.target.value)}
			/>
		</form>
	);
}

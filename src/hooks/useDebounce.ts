import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}

export default useDebounce;

export function useDebounceState<T>(
	initialValue: T,
	delay: number
): [T, (value: T) => void] {
	const [value, setValue] = useState<T>(initialValue);
	const debouncedValue = useDebounce(value, delay);

	return [debouncedValue, setValue];
}

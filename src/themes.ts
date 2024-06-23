import { BaseVariant, Theme, Variant } from './types';

const themeMap = [{ label: 'ice-candy', color: 'blue' }];

const variants = ['default'];

export const themes: Array<Theme> = [
	...themeMap
		.map(({ label, color }) => {
			return variants.map((variant) => ({
				name: `${label}${variant === 'default' ? '' : `-${variant}`}`,
				baseVariant: 'default' as BaseVariant,
				variant: color as Variant,
			}));
		})
		.reduce((acc, curr) => [...acc, ...curr], []),
];

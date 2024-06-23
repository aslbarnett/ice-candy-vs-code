import { defaultTheme } from './colors';

export const generateColorPalette = () => {
	const basePalette = defaultTheme.editor;

	return {
		basePalette: basePalette,
		colorPalette: defaultTheme.syntax.default,
		lightColorPalette: defaultTheme.syntax.light,
		primaryBgColor: basePalette.background,
		secondaryBgColor: basePalette.backgroundDark,
	};
};

export const alpha = (color: string, value: number) => {
	return `${color}${value * 100}`;
};

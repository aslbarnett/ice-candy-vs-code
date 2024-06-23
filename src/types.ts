export type BasePalette = {
	backgroundDark: string;
	background: string;
	foreground: string;
	selectionDark: string;
	selection: string;
	textDark: string;
	textMid: string;
	text: string;
	shadow: string;
};

export type ColorPalette = {
	blue: string;
	amethyst: string;
	ruby: string;
	amber: string;
	peridot: string;
	aquamarine: string;
	quartz: string;
};

export type BaseVariant = 'default';

export type Variant = 'blue';

export type Theme = {
	name: string;
	baseVariant: BaseVariant;
	variant: Variant;
};

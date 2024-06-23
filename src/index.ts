import { writeFile } from 'fs';
import { uiTemplate } from './template';
import { Theme } from './types';
import { themes } from './themes';

const createTheme = ({ name, baseVariant, variant }: Theme) => {
	const themeName = name
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
	const template = uiTemplate({
		baseVariant,
		variant,
		name: themeName,
	});

	writeFile(`themes/${name}-color-theme.json`, JSON.stringify(template), (error) => {
		if (error) {
			console.log('There was an unexpected error: ', error);
		}
	});
};

themes.forEach((theme) => createTheme(theme));

export const OPTIONS = [
	{
		title: 'opcja pierwsza',
		fn: () => {
			return console.log('1');
		}
	},
	{
		title: 'opcja druga',
		fn: () => {
			return console.log('2');
		}
	},
	{
		title: 'opcja losowa',
		fn: () => {
			return console.log('random');
		}
	}
];

export type Option = (typeof OPTIONS)[number];

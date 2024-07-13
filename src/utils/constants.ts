import data from '$db/data.json';

export const CONTENT = data;

export type Content = typeof CONTENT;
export type ContentItem = Content[number];

export const OPTIONS = [
	{
		id: 1,
		title: 'opcja pierwsza',
		fn: () => {
			return 1;
		}
	},
	{
		id: 2,
		title: 'opcja druga',
		fn: () => {
			return 2;
		}
	},
	{
		id: 3,
		title: 'opcja losowa',
		fn: (ids: number[]) => {
			const getRandomId = () => Math.floor(Math.random() * ids.length);
			const randomId = ids[getRandomId()];

			return randomId;
		}
	}
];

export type Options = typeof OPTIONS;
export type OptionsItem = Options[number];

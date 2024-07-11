import data from '$db/data.json';

export const DATA = data;

export const OPTIONS = [
	{
		id: 1,
		title: 'opcja pierwsza',
		fn: (data: typeof DATA) => {
			return data[0];
		}
	},
	{
		id: 2,
		title: 'opcja druga',
		fn: (data: typeof DATA) => {
			return data[1];
		}
	},
	{
		id: 3,
		title: 'opcja losowa',
		fn: (data: typeof DATA, unusedIds: number[]) => {
			if (unusedIds.length === 0) {
				return alert('Brak elementów do wyświetlenia');
			}

			const getRandomIndex = () => Math.floor(Math.random() * unusedIds.length);
			const randomId = unusedIds[getRandomIndex()];

			return data.find((item) => item.id === randomId);
		}
	}
];

export type Option = (typeof OPTIONS)[number];

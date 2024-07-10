import Root from './block-one.svelte';

const OPTIONS = [
	{
		title: 'Opcja pierwsza',
		fn: () => {
			return console.log('1');
		}
	},
	{
		title: 'Opcja druga',
		fn: () => {
			return console.log('2');
		}
	},
	{
		title: 'Opcja losowa',
		fn: () => {
			return console.log('random');
		}
	}
];

type Option = (typeof OPTIONS)[number];

interface Props {
	class: string;
}

export { Root as BlockOne, OPTIONS, type Props as BlockOneProps, type Option };

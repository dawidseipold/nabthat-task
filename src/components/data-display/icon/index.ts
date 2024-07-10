import type { Component } from 'svelte';
import Root from './icon.svelte';

let ICONS = {
	html: {
		viewBox: '0 0 24 24',
		svg: `<path fill="currentColor" d="m12 17.56l4.07-1.13l.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58l-2.22.6l-2.22-.6l-.14-1.66h-2l.29 3.19zM4.07 3h15.86L18.5 19.2L12 21l-6.5-1.8z"/>`
	}
};

const getIconDetails = (name: string) => {
	return ICONS[name as keyof typeof ICONS];
};

// TODO: Extend this with a type to include all native SVG attributes
interface Props {
	name: keyof typeof ICONS;
	class?: string;
	size?: number;
	width?: number;
	height?: number;
	fill?: string;
}

export { Root as Icon, ICONS, getIconDetails, type Props as IconProps };

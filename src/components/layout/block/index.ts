import type { Snippet } from 'svelte';
import Root from './block.svelte';

interface Props {
	children: Snippet;
	title: string;
	class?: string;
}

export { Root as Block, type Props as BlockProps };

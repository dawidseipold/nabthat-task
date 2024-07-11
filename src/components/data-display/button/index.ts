import type { Snippet } from 'svelte';
import Root from './button.svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

interface Props extends HTMLButtonAttributes {
	children: Snippet;
}

export { Root as Button, type Props as ButtonProps };

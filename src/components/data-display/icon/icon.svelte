<script lang="ts">
	import { getIconDetails, type IconProps } from '.';

	const {
		name,
		size,
		width = 24,
		height = 24,
		fill = 'black',
		class: className,
		...restProps
	}: IconProps = $props();

	const icon = getIconDetails(name);

	if (!name) {
		throw new Error('Icon name is required');
	}
</script>

<svg
	class={className}
	viewBox={icon.viewBox}
	width={size ?? width}
	height={size ?? height}
	{...restProps}
>
	{@html icon.svg}
</svg>

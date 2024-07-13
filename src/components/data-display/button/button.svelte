<script lang="ts">
	import type { ButtonProps } from '.';

	let { children, ...restProps }: ButtonProps = $props();
</script>

<button class="btn" {...restProps}>
	{@render children()}
</button>

<style lang="scss">
	@use 'sass:color';
	@import '$styles/variables';

	.btn {
		border: 1px solid $content-foreground;
		border-radius: 2px;
		padding: 0.75rem 3rem;
		font-weight: 700;
		font-size: 1.25rem;
		color: $dimmed-foreground;
		text-transform: uppercase;
		width: max-content;

		&:hover {
			cursor: pointer;
			background: linear-gradient(
				90deg,
				color.adjust($accent, $lightness: 10%) 0%,
				color.adjust($accent, $lightness: 20%) 100%
			);
			color: $content-foreground;
		}
	}
</style>

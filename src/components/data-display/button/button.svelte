<script lang="ts">
	import type { ButtonProps } from '.';

	let { children, ...restProps }: ButtonProps = $props();
</script>

<button class="btn" {...restProps}>
	{@render children()}
</button>

<style lang="scss">
	@import '$styles/abstracts/variables';

	.btn {
		border: 1px solid $content-foreground;
		border-radius: 2px;
		padding: 0.5rem 2rem;
		font-weight: 700;
		text-transform: uppercase;

		&:hover {
			cursor: pointer;
		}
	}
</style>

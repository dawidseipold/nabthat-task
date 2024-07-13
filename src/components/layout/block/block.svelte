<script lang="ts">
	import clsx from 'clsx';
	import { type BlockProps } from '.';

	let { children, title, class: className }: BlockProps = $props();
</script>

<div class={clsx('block', className)}>
	<h2 class="heading">{title}</h2>

	{@render children()}
</div>

<style lang="scss">
	@import '$styles/variables';
	@import '$styles/breakpoints';
	@import '$styles/mixins';

	.block {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
		grid-column: span 1;
		color: $content-foreground;
	}

	.heading {
		@include heading-secondary;
		text-align: center;
	}
</style>

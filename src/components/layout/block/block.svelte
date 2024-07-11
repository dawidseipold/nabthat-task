<script lang="ts">
	import clsx from 'clsx';
	import { type BlockProps } from '.';

	let { children, title, class: className }: BlockProps = $props();
</script>

<div class={clsx('blocks__element', className)}>
	<h2 class="heading">{title}</h2>

	{@render children()}
</div>

<style lang="scss">
	@import '$styles/abstracts/variables';
	@import '$styles/abstracts/mixins';

	.blocks__element {
		@include block;

		&:last-child {
			flex: 1 100%;
		}
	}

	.heading {
		@include heading-secondary;
		text-align: center;
	}
</style>

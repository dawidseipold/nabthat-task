<script lang="ts">
	import { type BlockOneProps, type Option, OPTIONS } from '.';
</script>

{#snippet option(option: Option)}
	<p>{option.title}</p>
{/snippet}

<div class="block">
	<h2 class="heading">blok pierwszy</h2>

	<ul>
		{#each OPTIONS as opt (opt.title)}
			<li>{@render option(opt)}</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@import '$styles/abstracts/variables';
	@import '$styles/abstracts/mixins';

	.heading {
		@include heading-secondary;
	}

	.block {
		@include block;
	}
</style>

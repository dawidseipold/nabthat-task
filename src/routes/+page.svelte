<script>
	import { BlockOne } from '$components/layout/block-one';
</script>

<div class="container">
	<h1 class="heading">Nagłówek H1</h1>

	<div class="blocks">
		<BlockOne />
	</div>
</div>

<style lang="scss">
	@import '$styles/abstracts/variables';
	@import '$styles/abstracts/mixins';
	@import '$styles/abstracts/breakpoints';

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.heading {
		color: $content-foreground;

		@include heading-primary;
	}
</style>

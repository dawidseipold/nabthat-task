<script>
	import { Footer } from '$components/layout/footer';
	import { Header } from '$components/layout/header';
	import { setContentState } from '$context/content-state.svelte';
	import { setDetailsState } from '$context/details-state.svelte';
	import { setOptionsState } from '$context/option-state.svelte';
	import { CONTENT, OPTIONS } from '$utils/constants';

	let { children } = $props();

	// TODO: Create a function to set all states at once
	setDetailsState();
	setContentState(CONTENT);
	setOptionsState(OPTIONS);
</script>

<div class="wrapper">
	<Header />
	<main class="main">
		<div class="main__wrapper">{@render children()}</div>
	</main>
	<Footer />
</div>

<style lang="scss">
	@import '$styles/variables';
	@import '$styles/breakpoints';
	@import '$styles/mixins';

	.wrapper {
		font-family: Arial, Helvetica, sans-serif;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
	}

	.main {
		background: $content-background;
		display: flex;
		flex: 1;

		&__wrapper {
			@include wrapper;

			padding-top: 1rem;
			padding-bottom: 1rem;

			@include breakpoint('md') {
				& {
					padding-top: 2rem;
					padding-bottom: 2rem;
				}
			}
		}
	}
</style>

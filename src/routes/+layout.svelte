<script>
	import { Footer } from '$components/layout/footer';
	import { Header } from '$components/layout/header';

	let { children } = $props();
</script>

<div class="wrapper">
	<Header />
	<main class="main">
		<div class="main__wrapper">{@render children()}</div>
	</main>
	<Footer />
</div>

<style lang="scss">
	@import '$styles/abstracts/variables';
	@import '$styles/abstracts/breakpoints';
	@import '$styles/abstracts/mixins';

	.wrapper {
		font-family: Arial, Helvetica, sans-serif;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.main {
		background: $content-background;
		display: flex;
		flex: 1;

		&__wrapper {
			@include wrapper;

			padding-top: 1rem;
			padding-bottom: 1rem;

			@include md {
				padding-top: 2rem;
				padding-bottom: 2rem;
			}
		}
	}
</style>

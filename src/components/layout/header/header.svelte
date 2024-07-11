<script>
	import { Logo } from '$components/data-display/logo';
	import { getDetailsState } from '$context/details-state.svelte';
	import { clsx } from 'clsx';

	const detailsState = getDetailsState();
</script>

<header class="header">
	<div class="header__wrapper">
		<Logo />
		<div class="text-box">
			<span class="text-box__top">Zadanie <b>rekrutacyjne</b></span>
			<a
				href="https://www.dawidseipold.com"
				rel="noopener noreferrer"
				target="_blank"
				class={clsx('text-box__bottom', { ['active']: detailsState.get()?.visible })}
				>Dawid Seipold</a
			>
		</div>
	</div>
</header>

<style lang="scss">
	@import '$styles/abstracts/variables';
	@import '$styles/abstracts/mixins';
	@import '$styles/abstracts/breakpoints';

	.header {
		background-color: $header-background;

		&__wrapper {
			@include wrapper;

			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-top: 1rem;
			padding-bottom: 1rem;

			@include md {
				padding-top: 1rem;
				padding-bottom: 1rem;
			}
		}
	}

	.text-box {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		color: $header-foreground;

		@include md {
			font-size: 1.5rem;
		}

		&__top {
			font-weight: 500;
		}

		&__bottom {
			display: none;
			font-weight: 300;

			&.active {
				display: block;
			}
		}
	}
</style>

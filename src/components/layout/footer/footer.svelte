<script lang="ts">
	import CssIsAwesome from '$components/data-display/css-is-awesome/css-is-awesome.svelte';
	import { getDetailsState } from '$context/details-state.svelte';
	import type { HTMLDialogAttributes } from 'svelte/elements';

	const detailsState = getDetailsState();

	const detailsHandler = () => {
		detailsState.toggleVisibility();
	};

	let detailsVisible = $derived(detailsState.get()?.visible);

	let dialog = $state<HTMLDialogElement>();
</script>

<footer class="footer">
	<div class="footer__wrapper">
		<CssIsAwesome />

		<div class="footer__logo">nabthat</div>

		<div class="footer__options">
			<button onclick={() => dialog && dialog.show()} class="footer__button"
				>Open Modal dialog</button
			>

			<dialog bind:this={dialog} class="footer__dialog">
				<button class="footer__dialog__button"> zresetuj ustawienia </button>

				<button
					class="footer__dialog__button"
					onclick={() => {
						detailsHandler();
					}}
				>
					{detailsVisible ? 'schowaj' : 'pokaż'} dane osobowe
				</button>
				<button onclick={() => dialog && dialog.close()}>Close</button>
			</dialog>
		</div>
	</div>
</footer>

<style lang="scss">
	@import '$styles/abstracts/variables';
	@import '$styles/abstracts/mixins';
	@import '$styles/abstracts/breakpoints';

	.footer {
		background-color: $footer-background;
		color: $footer-foreground;

		&__wrapper {
			@include wrapper;

			padding-top: 1rem;
			padding-bottom: 1rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__logo {
			position: relative;
			color: $footer-foreground;
			align-items: center;
			font-size: 1.25rem;
			display: none;

			@include breakpoint('md') {
				display: flex;
			}

			&::before,
			&::after {
				content: '';
				height: 1px;
				width: 2rem;
				background: $footer-foreground;
			}

			&::before {
				margin-right: 0.25rem;
			}

			&::after {
				margin-left: 0.25rem;
			}
		}
	}
</style>

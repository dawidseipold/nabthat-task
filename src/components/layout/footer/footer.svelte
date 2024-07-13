<script lang="ts">
	import CssIsAwesome from '$components/data-display/css-is-awesome/css-is-awesome.svelte';
	import { getContentState } from '$context/content-state.svelte';
	import { getDetailsState } from '$context/details-state.svelte';
	import { getOptionsState } from '$context/option-state.svelte';
	import { createDropdownMenu, melt } from '@melt-ui/svelte';

	const detailsState = getDetailsState();
	const detailsHandler = () => {
		detailsState.toggleVisibility();
	};
	let detailsVisible = $derived(detailsState.get()?.visible);
	let content = getContentState();
	let details = getDetailsState();

	const {
		elements: { menu, item, trigger },
		states: { open }
	} = createDropdownMenu({});

	const resetSettings = () => {
		content.reset();
		details.set({ visible: false });
	};
</script>

{#snippet chevron(rotation: number = 0)}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		class="chevron"
		style="--rotate: {rotation}deg;"
	>
		<path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z" />
	</svg>
{/snippet}

<footer class="footer">
	<div class="footer__wrapper">
		<CssIsAwesome />

		<div class="footer__logo">nabthat</div>

		<div class="footer__options">
			<button use:melt={$trigger} class="footer__options__button">
				pokaż
				{@render chevron($open ? 180 : 0)}
			</button>

			{#if $open}
				<div use:melt={$menu} class="footer__options__dropdown">
					<button
						use:melt={$item}
						class="footer__options__dropdown__button"
						onclick={() => {
							resetSettings();
						}}
					>
						{@render chevron(90)}
						zresetuj ustawienia
					</button>
					<button
						use:melt={$item}
						class="footer__options__dropdown__button"
						onclick={() => {
							detailsHandler();
						}}
					>
						{@render chevron(90)}
						{detailsVisible ? 'schowaj' : 'pokaż'} dane osobowe
					</button>
				</div>
			{/if}
		</div>
	</div>
</footer>

<style lang="scss">
	@import '$styles/variables';
	@import '$styles/mixins';
	@import '$styles/breakpoints';

	.chevron {
		rotate: var(--rotate, 0deg);
	}

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
				& {
					display: flex;
				}
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

		&__options {
			&__button {
				color: $dimmed-foreground;
				border: 1px solid $footer-foreground;
				border-radius: 4px;
				padding: 0.75rem 4rem;
				text-transform: uppercase;
				font-weight: 700;
				display: flex;
				column-gap: 0.25rem;
				align-items: center;

				&:hover {
					color: $content-foreground;
					cursor: pointer;
				}
			}

			&__dropdown {
				background-color: $content-foreground;
				display: flex;
				flex-direction: column;
				justify-content: start;
				row-gap: 1rem;
				padding: 1rem;
				border-radius: 0.25rem;
				box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);

				&__button {
					display: flex;
					column-gap: 0.25rem;
					align-items: center;
					text-transform: uppercase;
					font-weight: 600;
					color: $header-background;
					font-family: Arial, Helvetica, sans-serif;

					&:hover {
						color: $accent;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>

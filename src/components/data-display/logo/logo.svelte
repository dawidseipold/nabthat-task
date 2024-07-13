<script lang="ts">
</script>

<a href="/" class="logo">
	<svg
		class="logo__icon"
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		viewBox="0 0 24 24"
		><path
			fill="currentColor"
			d="m12 17.56l4.07-1.13l.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58l-2.22.6l-2.22-.6l-.14-1.66h-2l.29 3.19zM4.07 3h15.86L18.5 19.2L12 21l-6.5-1.8z"
		/></svg
	>
</a>

<style lang="scss">
	@import '$styles/variables';
	@import '$styles/breakpoints';

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 48px;
		width: 48px;
		border-radius: 50%;
		background-color: $logo-background;

		@include breakpoint('md') {
			& {
				height: 64px;
				width: 64px;
			}
		}

		&:hover {
			background-color: $accent;
		}

		.logo__icon {
			width: 100%;
			height: 100%;
			padding: 8px;
			border-radius: 100%;
			color: $logo-foreground;

			@include breakpoint('md') {
				& {
					padding: 12px;
				}
			}
		}
	}
</style>

<div class="element">
	<span class="element__line">css</span>
	<span class="element__line">is</span>
	<span class="element__line">awesome</span>
</div>

<style lang="scss">
	@import '$styles/abstracts/variables';

	.element {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: space-between;
		padding: 8px;
		border: 1px solid $footer-foreground;
		height: 6rem;
		width: 6rem;

		&:hover {
			border-color: $accent;
			cursor: pointer;
		}

		&__line {
			font-size: 1.25rem;
			font-weight: 500;
			color: $footer-foreground;
			text-transform: uppercase;

			.element:hover & {
				color: $footer-foreground-hover;
			}
		}
	}
</style>

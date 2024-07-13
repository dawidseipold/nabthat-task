<div class="container">
	<div class="element">
		<span class="element__line">css</span>
		<span class="element__line">is</span>
		<span class="element__line">awesome</span>
	</div>
</div>

<style lang="scss">
	@import '$styles/variables';
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.container {
		height: 6rem;
		width: 6rem;
		position: relative;
	}

	.element {
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: space-between;
		padding: 8px;
		border: 1px solid $footer-foreground;
		height: 6rem;
		width: 6rem;
		transform-origin: center;

		&:hover {
			border-color: $accent;
			cursor: pointer;

			animation: rotate 1s normal forwards;
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

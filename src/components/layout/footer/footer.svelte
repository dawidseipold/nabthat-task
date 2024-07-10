<footer class="footer">
	<div class="footer__wrapper">Footer</div>
</footer>

<style lang="scss">
	@import '$styles/abstracts/variables';
	@import '$styles/abstracts/mixins';
	@import '$styles/abstracts/breakpoints';

	.footer {
		background-color: $footer-background;
		color: $footer-foreground;
		padding: 1rem;
		text-align: center;

		&__wrapper {
			@include wrapper;
		}
	}
</style>

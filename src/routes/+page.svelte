<script lang="ts">
	import { Button } from '$components/data-display/button';
	import { Block } from '$components/layout/block';
	import { getContentState } from '$context/content-state.svelte';
	import { getOptionsState } from '$context/option-state.svelte';
	import { OPTIONS } from '$utils/constants';

	let content = getContentState();
	let options = getOptionsState();

	const alertNoOption = () => {
		if (!options.getSelected()) {
			alert('Wybierz opcję');
			return true;
		}

		return false;
	};

	const alertElementAdded = (contentId: number) => {
		if (content.getUsed().filter((item) => item.id === contentId).length > 0) {
			alert('Element został już dodany');
			return true;
		}

		return false;
	};

	const alertNoUnused = () => {
		if (content.getUnused().length === 0) {
			alert('Brak elementów do dodania');
			return true;
		}

		return false;
	};

	const handleReplace = () => {
		if (alertNoOption()) return;

		const contentId = options.getSelected()?.fn(content.get().map((item) => item.id));

		if (contentId) {
			content.replace(contentId);

			return;
		}
	};

	const handleAdd = () => {
		if (alertNoOption()) return;

		const contentId = options.getSelected()?.fn(content.getUnused().map((item) => item.id));

		if (alertNoUnused()) return;

		if (contentId) {
			if (alertElementAdded(contentId)) return;

			content.add(contentId);

			return;
		}
	};
</script>

{#snippet dataPart(text: string)}
	<p>{text}</p>
{/snippet}

<div class="container">
	<h1 class="heading">Nagłówek H1</h1>

	<div class="section">
		<form class="form">
			<Block title="blok pierwszy" class="form__radio">
				{#each OPTIONS as opt (opt.title)}
					{@const id = `option-${opt.id}`}

					<div class="radio">
						<input
							class="radio__input"
							type="radio"
							{id}
							name="option"
							value={opt.id}
							required
							onchange={() => options.select(opt.id)}
						/>
						<label class="radio__label" for={id}>{opt.title}</label>
					</div>
				{/each}
			</Block>

			<Block title="blok drugi" class="form__buttons">
				<div>
					<Button
						type="submit"
						onclick={() => {
							handleReplace();
						}}>Zastąp</Button
					>

					<Button
						type="submit"
						onclick={() => {
							handleAdd();
						}}>Doklej</Button
					>
				</div>
			</Block>
		</form>

		<Block title="blok trzeci" class="content">
			<ul>
				{#each content.getUsed() as item (item)}
					<li>
						{@render dataPart(item.content)}
					</li>
				{/each}
			</ul>
		</Block>
	</div>
</div>

<style lang="scss">
	@import '$styles/variables';
	@import '$styles/mixins';
	@import '$styles/breakpoints';

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 2rem;
		justify-content: center;
	}

	.heading {
		color: $content-foreground;

		@include heading-primary;
	}

	.section {
		display: flex;
		flex-direction: column;
		align-items: start;
		row-gap: 2rem;
		width: 100%;

		@include breakpoint('lg') {
			& {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				column-gap: 2rem;
			}
		}
	}

	.form {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: auto;

		justify-content: space-between;
		column-gap: 2rem;
		row-gap: 2rem;
		align-items: start;

		@include breakpoint('lg') {
			& {
				grid-column: span 2;
			}
		}

		.radio {
			&__input {
				display: none;

				&:checked {
					& + label {
						font-weight: 700;
					}

					& + .radio__label::before {
						background-color: $content-foreground;
						border: 2px solid white;
						box-shadow: inset 0 0 0 4px #2e2e2e;
					}
				}
			}

			&__label {
				cursor: pointer;
				display: flex;
				align-items: center;
				column-gap: 0.5rem;

				color: $content-foreground;

				&:hover {
					color: $dimmed-foreground;

					&::before {
						border-color: $dimmed-foreground;
					}
				}

				&::before {
					content: '';
					display: inline-block;
					width: 1.5rem;
					height: 1.5rem;
					border: 2px solid $content-foreground;
					border-radius: 50%;
				}
			}
		}

		:global(.block.form__buttons) {
			align-items: end;

			@include breakpoint('lg') {
				& {
					align-items: center;
				}
			}
		}

		:global(.block.form__buttons div) {
			display: flex;
			flex-direction: column;
			row-gap: 1rem;
			align-items: end;
			justify-content: center;

			@include breakpoint('lg') {
				& {
					align-items: center;
					flex-direction: row;
					justify-content: space-between;
					column-gap: 3rem;
				}
			}
		}
	}

	:global(.content) {
		grid-column: span 2;
		width: 100%;
	}

	:global(.content ul) {
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
		align-items: center;

		@include breakpoint('lg') {
			& {
				align-items: start;
			}
		}
	}

	:global(.content ul li) {
		color: $dimmed-foreground;
	}
</style>

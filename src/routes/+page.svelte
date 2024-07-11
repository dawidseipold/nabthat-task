<script lang="ts">
	import { Button } from '$components/data-display/button';
	import { Block } from '$components/layout/block';
	import { DATA, OPTIONS, type Option } from '$utils/constants';

	let data = $state(DATA);
	let content = $state([] as string[]);
	let selectedOption = $state(null as Option | null);
	let selectedMethod = $state(null as 'replace' | 'add' | null);

	let unusedContentIds = $state([...new Set(data.map((item) => Number(item.id)))]);

	const resetUnusedContentIds = () => {
		unusedContentIds = [...new Set(data.map((item) => Number(item.id)))];
	};

	const removeIdFromUnusedContentIds = (id: number) => {
		unusedContentIds = unusedContentIds.filter((item) => item !== id);
	};

	const handleSubmit = (e: Event) => {
		e.preventDefault();

		const item = selectedOption?.fn(data, unusedContentIds);

		if (item) {
			if (!unusedContentIds.includes(item.id)) {
				alert('Ten element został już wykorzystany');
				return;
			}

			if (selectedMethod === 'replace') {
				resetUnusedContentIds();
				removeIdFromUnusedContentIds(item.id);

				content = [item.content];
			} else {
				removeIdFromUnusedContentIds(item.id);

				content = [...content, item.content];
			}
		}
	};
</script>

{#snippet dataPart(text: string)}
	<p>{text}</p>
{/snippet}

<div class="container">
	<h1 class="heading">Nagłówek H1</h1>

	<form onsubmit={handleSubmit} class="blocks">
		<Block title="blok pierwszy">
			<ul>
				{#each OPTIONS as opt (opt.title)}
					{@const id = `option-${opt.id}`}

					<li>
						<input
							type="radio"
							{id}
							name="option"
							value={opt}
							bind:group={selectedOption}
							required
						/>
						<label for={id}>{opt.title}</label>
					</li>
				{/each}
			</ul>
		</Block>

		<Block title="blok drugi">
			<Button type="submit" onclick={() => (selectedMethod = 'replace')}>Zastąp</Button>
			<Button type="submit" onclick={() => (selectedMethod = 'add')}>Doklej</Button>
		</Block>

		<Block title="blok trzeci">
			{#each content as item (item)}
				{@render dataPart(item)}
			{/each}
		</Block>
	</form>
</div>

<style lang="scss">
	@import '$styles/abstracts/variables';
	@import '$styles/abstracts/mixins';
	@import '$styles/abstracts/breakpoints';

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.heading {
		color: $content-foreground;

		@include heading-primary;
	}

	.blocks {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 4rem;
		align-items: center;

		@include breakpoint('md') {
		}
	}
</style>

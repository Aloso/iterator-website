<script lang="ts">
	import type { Fn } from '../fns'
	import Function from './Function.svelte'

	interface Props {
		tabName: string
		functions: Fn[]
	}

	let { functions }: Props = $props()

	const descriptions = {
		Filter: 'Remove items from the iterator',
		Expand: 'Add items to the iterator',
		Transform: 'Modify the items in the iterator',

		Select: 'Pick an item from the iterator',
		Search: 'Find an item matching a predicate',
		Validate: 'Check if the iterator meets a certain condition',
		Accumulate: 'Condense the iterator into a single value',
		Compare: 'Lexicographically compare two iterators',
	}

	let [groups, rest] = $derived.by(() => {
		const groups: Record<string, Fn[]> = {}
		const rest: Fn[] = []
		for (const f of functions) {
			const groupName = f.category[1]
			if (groupName) {
				;(groups[groupName] ?? (groups[groupName] = [])).push(f)
			} else {
				rest.push(f)
			}
		}
		return [groups, rest]
	})
</script>

{#each rest as f (f.name)}
	<Function {f} />
{/each}

{#each Object.entries(groups) as [groupName, fns] (groupName)}
	<details>
		<summary>
			{groupName}
			{#if descriptions[groupName as keyof typeof descriptions]}
				<div class="description">{descriptions[groupName as keyof typeof descriptions]}</div>
			{/if}
		</summary>

		{#each fns as f (f.name)}
			<Function {f} />
		{/each}
	</details>
{/each}

<style lang="scss">
	summary {
		margin: 0.75rem 0;
		font-weight: 600;
		font-size: 1.2rem;
		background-color: var(--bg);
		cursor: pointer;

		@media (min-width: 560px) {
			position: sticky;
			box-shadow: 0 0 0 0.5rem var(--bg);
			top: 3.6rem;
		}

		&:hover {
			color: var(--highlight);
		}

		.description {
			font-size: 1rem;
			font-weight: normal;
			margin-left: 1rem;
			opacity: 0.75;
		}
	}

	details:not([open]) summary {
		width: max-content;
	}
</style>

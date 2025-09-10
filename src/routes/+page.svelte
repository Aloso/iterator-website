<script lang="ts">
	import { functions } from '$lib/data'
	import Functions from '$lib/components/Functions.svelte'
	import Tabbar from '$lib/components/Tabbar.svelte'

	let includeNightly = $state(false)
	let includeItertools = $state(false)

	let filteredFns = $derived(
		functions.filter((f) => {
			if (!includeItertools && f.itertools) return false
			if (!includeNightly && f.nightly) return false
			return true
		}),
	)
</script>

<main>
	<h1>Rust <code>Iterator</code> overview</h1>

	<p>
		<a href="https://doc.rust-lang.org/std/iter/index.html">Iterators</a> are a powerful concept in Rust. This website gives
		an overview and helps you select the best method.
	</p>
	<p>
		For an introduction,
		<a href="https://doc.rust-lang.org/book/ch13-02-iterators.html">read the chapter in the book</a>. Remember:
		Iterators (and adapters) are <em>lazy</em>. Creating an iterator does nothing, so you need to <em>consume</em> it to
		perform the iteration.
	</p>

	<label class="checkboxLabel">
		<input type="checkbox" bind:checked={includeNightly} /> include nightly-only methods
	</label>
	<label class="checkboxLabel tbd">
		<input type="checkbox" bind:checked={includeItertools} disabled /> <code>itertools</code> TBD
	</label>

	<Tabbar id="tabs" activeTab={1} names={['Constructors', 'Adapters', 'Consumers', 'Other']}>
		{#snippet tab(_i, tabName)}
			{#if tabName === 'Constructors'}
				<p>I want to create an iterator from...</p>
			{/if}
			<Functions {tabName} functions={filteredFns.filter((f) => f.category[0] === tabName)} />
		{/snippet}
	</Tabbar>
</main>

<style lang="scss">
	.checkboxLabel {
		display: block;
		margin: 0.33rem 0;
		max-width: max-content;

		&.tbd {
			opacity: 0.5;
		}
	}
</style>

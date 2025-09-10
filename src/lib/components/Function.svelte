<script lang="ts">
	import type { Fn } from '../../../../iteratorw/src/lib/fns'

	interface Props {
		f: Fn
	}

	let { f }: Props = $props()

	const receiver = $derived(f.receiver ? `${f.receiver}::` : '')
	const generics = $derived(f.generic_args ? `::<${f.generic_args.join(', ')}>` : '')
	const args = $derived(`${generics}(${f.args.join(', ')})`)
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_tabindex, a11y_no_static_element_interactions -->
<div class="fn card">
	{#if f.url !== false}
		<pre><a href={f.url ?? `https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.${f.name}`}
				>{receiver}<em>{f.name}</em>{args}</a
			><a class="anchor-link" id={f.name} href="#{f.name}">§</a></pre>
	{:else}
		<pre>{receiver}<em>{f.name}</em>{args}<a class="anchor-link" id={f.name} href="#{f.name}">§</a></pre>
	{/if}
	{#if f.nightly}
		<div class="nightly label">Nightly-only experimental API</div>
	{/if}
	{#if f.itertools}
		<div class="label">itertools API</div>
	{/if}
	<p>{@html f.description}</p>
	{#if f.related}
		<p>
			See also:
			{#each f.related as related, i}{i > 0 ? ', ' : ''}<a href="#{related}">{related}</a>{/each}
		</p>
	{/if}
</div>

<style lang="scss">
	.fn {
		transition: box-shadow 0.33s;
		&:focus-within {
			outline: none;
			box-shadow: 0 0 0 0.25rem #ff880077;
		}
	}

	.anchor-link {
		margin-left: 0.5rem;
		scroll-margin-top: 10rem;
		opacity: 0;
		transition: opacity 0.15s;

		.fn:hover &,
		.fn:focus-within & {
			opacity: 0.5;
		}
	}

	.label {
		width: max-content;
		margin: 0.5rem 0 0 0;
		border-radius: 6px;
		padding: 0.1rem 0.6rem;
		background-color: #1c1c1c;
		font-size: 92%;
	}

	.nightly {
		position: relative;
		padding: 0.1rem 0.6rem 0.1rem 1rem;

		&::before {
			content: '';
			position: absolute;
			display: block;
			width: 0.5rem;
			height: 100%;
			left: 0;
			top: 0;
			background: repeating-linear-gradient(-45deg, #ffc400 0px, #ffc400 5px, black 5px, black 10px);
			border-radius: 6px 0 0 6px;
		}
	}
</style>

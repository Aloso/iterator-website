<script lang="ts">
  import type { Fn } from '$lib/fns'

  interface Props {
    f: Fn
    showTypes: boolean
  }

  let { f, showTypes }: Props = $props()

  const url = $derived(f.url ?? `https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.${f.name}`)

  const generics = $derived.by(() => {
    const const_generics = f.const_generic_args
      ? Object.entries(f.const_generic_args).map(([arg, ty]) => {
          if (!showTypes) return `const ${escape(arg)}`
          return `const <i>${escape(arg)}</i>: <span class="ty">${formatType(ty)}</span>`
        })
      : undefined

    if (!f.generic_args || !showTypes) {
      return const_generics ? `&lt;${const_generics.join(', ')}&gt;` : ''
    }
    const generics = Object.entries(f.generic_args).map(([arg, bounds]) => {
      if (bounds.length === 0) return `<i>${formatType(arg)}</i>`
      return `<i>${formatType(arg)}</i>: <span class="ty">${bounds.map(formatType).join(' + ')}</span>`
    })
    if (const_generics) generics.unshift(...const_generics)
    return `&lt;${generics.join(', ')}&gt;`
  })
  const args = $derived.by(() => {
    if (showTypes && !Array.isArray(f.args)) {
      const args = Object.entries(f.args).map(
        ([arg, ty]) => `${escape(arg)}<span class="ty">: ${formatType(ty)}</span>`,
      )
      return args.join(', ')
    } else {
      const args = Array.isArray(f.args) ? f.args : Object.keys(f.args)
      return escape(args.join(', '))
    }
  })
  const returns = $derived.by(() => {
    if (!f.returns || !showTypes) return ''
    return `<span class="ty"> -> ${formatType(f.returns)}</span>`
  })
  const where = $derived.by(() => {
    if (!f.where || !showTypes) return ''
    return `<br/><span class="ty">where<br/> &nbsp; &nbsp;${f.where.map(formatType).join(',<br/> &nbsp; &nbsp;')}</span>`
  })

  function formatType(ty: string): string {
    return escape(ty).replace(/([#$])(\w+)/g, (c, prefix, word) => {
      const tag = prefix === '#' ? 'strong' : 'i'
      return `<${tag}>${word}</${tag}>`
    })
  }

  function escape(string: string): string {
    return string.replace(/[<>&"']/g, (c) => {
      switch (c) {
        case '<':
          return '&lt;'
        case '>':
          return '&gt;'
        case '&':
          return '&amp;'
        case '"':
          return '&quot;'
        default:
          return '&apos;'
      }
    })
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_tabindex, a11y_no_static_element_interactions -->
<div class="fn card">
  <div class="code">
    {#if url !== false}
      <a href={url}><em>{f.name}</em>{@html generics}({@html args}){@html returns}</a>{@html where}
    {:else}
      <em>{f.name}</em>{@html generics}({@html args}){@html returns}{@html where}
    {/if}
    <a class="anchor-link" id={f.name} href="#{f.name}">§</a>
  </div>

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

  .code {
    font-family:
      JetBrains Mono,
      monospace;

    :global(.ty) {
      font-weight: 300;
      color: #bbb;

      @media (prefers-color-scheme: light) {
        color: #555;
      }
    }

    em {
      color: #ecca40;
      font-style: normal;

      @media (prefers-color-scheme: light) {
        color: #8a5403;
      }
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: inherit;
        text-decoration: underline;
      }
    }

    :global(strong) {
      font-weight: inherit;
      color: #66bdd8;

      @media (prefers-color-scheme: light) {
        color: #0088b2;
      }
    }

    :global(i) {
      font-style: inherit;
      color: #62df8c;

      @media (prefers-color-scheme: light) {
        color: #018f04;
      }
    }
  }

  .anchor-link {
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

    @media (prefers-color-scheme: light) {
      background-color: #7773;
    }
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

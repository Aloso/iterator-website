<script lang="ts">
  import { onMount, type Snippet } from 'svelte'

  interface Props {
    id: string
    activeTab: number
    names: string[]
    tab: Snippet<[number, string]>
  }

  let { id, names, activeTab: initialActiveTab, tab }: Props = $props()

  let initialized = $state(false)
  let tabbar = $state<HTMLDivElement>()
  let activeTab = $state(initialActiveTab)

  onMount(() => {
    initialized = true
  })

  function clickTab(event: MouseEvent & { currentTarget: HTMLButtonElement }) {
    const { tab } = event.currentTarget.dataset
    if (!tab || !tabbar) return

    const detailsElem = tabbar.children[Number(tab) + 1] as HTMLDetailsElement
    if (!detailsElem) return

    detailsElem.open = true
    activeTab = Number(tab)
  }

  function toggleTab(event: Event & { currentTarget: HTMLDetailsElement }) {
    if (event.currentTarget.open) {
      const { tab } = event.currentTarget.dataset
      activeTab = Number(tab)
    }
  }
</script>

<div class="tabpane" class:initialized bind:this={tabbar}>
  {#if initialized}
    <div class="tabbar">
      {#each names as name, i (name)}
        <button type="button" onclick={clickTab} data-tab={i} data-active={activeTab === i}>{name}</button>
      {/each}
    </div>
  {/if}

  {#each names as name, i (i)}
    <details open={initialActiveTab === i} name={id} data-tab={i} ontoggle={toggleTab}>
      <summary class="tabbar-summary">{names[i]}</summary>

      {@render tab(i, name)}
    </details>
  {/each}
</div>

<style lang="scss">
  .tabbar {
    margin: 0.5em 0;
    padding: 0.5em 0;
    background-color: var(--bg);
    display: flex;
    gap: 0.33rem;
    flex-wrap: wrap;
    position: sticky;
    top: 0;
    z-index: 1;

    button {
      height: 2.6rem;
    }
  }

  .tabbar-summary {
    font-weight: 600;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      color: var(--highlight);
    }

    .initialized & {
      display: none;
    }
  }
</style>

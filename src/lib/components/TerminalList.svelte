<script lang="ts">
  import Terminal from '$lib/components/Terminal.svelte';
  import type { LinkItem } from '$lib/types';

  export let start = false;
  export let list: LinkItem[];
  export let completed = false;

  let completedItem = 0;
  let completedItems: boolean[] = [];

  $: {
    if (completedItem === list.length) {
      completed = true;
      console.log('completed');
    }
  }
</script>

{#if start}
  <span class="list">
    {#each list as item, index}
      <a target="_blank" rel="noopener noreferrer" href={item.link}>
        <Terminal start={true} message={item.text} bind:completed={completedItems[index]} />
      </a>
    {/each}
  </span>
{/if}

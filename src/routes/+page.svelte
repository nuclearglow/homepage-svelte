<script lang="ts">
  import Terminal from '$lib/components/Terminal.svelte';
  import TerminalList from '$lib/components/TerminalList.svelte';
  import * as config from '$lib/config';
  import * as content from '$lib/content';

  let bannerCompleted: boolean;
  let contactsCompleted: boolean;
  let footerCompleted: boolean;
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<Terminal start={true} message={content.banner} bind:completed={bannerCompleted} />
<TerminalList start={bannerCompleted} list={content.contacts} bind:completed={contactsCompleted} />
<Terminal start={contactsCompleted} message={content.footer} bind:completed={footerCompleted} />
<Terminal start={footerCompleted} message={content.prompt} bind:completed={bannerCompleted} />
<span class="cursor" />

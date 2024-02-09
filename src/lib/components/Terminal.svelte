<script lang="ts">
  import { animationTick } from '$lib/config';
  import { onDestroy } from 'svelte';
  import { linear } from 'svelte/easing';
  import { tweened, type Tweened } from 'svelte/motion';

  export let start = false;
  export let message: string;
  export let completed = false;

  let cleanup = undefined as (() => void) | undefined;

  const duration = message.length * animationTick;

  let positionStore: Tweened<number> | undefined;
  let position = 0;

  onDestroy(() => {
    if (cleanup) cleanup();
  });

  $: {
    if (cleanup) cleanup();

    if (start) {
      positionStore = tweened(0, {
        duration,
        easing: linear,
      });

      cleanup = positionStore.subscribe((value) => {
        position = value;
        if (value === message.length) {
          completed = true;
        }
      });

      positionStore.set(message.length);
    }
  }
</script>

<pre>
  {message.slice(0, position)}
</pre>

<script lang="ts">
  import { onMount } from 'svelte';

  // TODO: this is probably not the proper way to detect when a page is done loading (also see global.css line 3)
  let isLoading = true;
  onMount(() => {
    isLoading = false;
  });
</script>

{#if isLoading}
  <!-- TODO: make a better loading screen -->
  <div class="loading" style="background-color: black;">Loading...</div>
{:else}
  <div>_layout</div>
  <slot/>
{/if}
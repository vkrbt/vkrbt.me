<script>
	import ButtonLink from './ButtonLink.svelte';

    export let href;
    export let label;

    let isButtonShown = href && label;
</script>

<style>
    .container {
        padding: 16px;
        padding-bottom: calc(16px + env(safe-area-inset-bottom));
        min-height: 100%;
    }

    .container_home {
        padding-bottom: 56px;
        padding-bottom: calc(56px + env(safe-area-inset-bottom));
    }
</style>

<div class="container{isButtonShown ? ' container_home' : ''}">
    <slot />

    {#if isButtonShown}
        <ButtonLink {href}>
            {label}
        </ButtonLink>
    {/if}
</div>
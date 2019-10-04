<script>
	import ButtonLink from './ButtonLink.svelte';

    export let href;
    export let label;

    let isButtonShown = href && label;
</script>

<style>
    .container {
        padding: 16px;
        min-height: 100%;
    }

    .container_home {
        padding-bottom: 56px;
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
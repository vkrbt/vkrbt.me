<script>
	import ButtonLink from './ButtonLink.svelte';

    export let showHome;
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

<div class="container{showHome ? ' container_home' : ''}">
    <slot />

    {#if showHome}
        <ButtonLink href="/">
            На главную
        </ButtonLink>
    {/if}
</div>
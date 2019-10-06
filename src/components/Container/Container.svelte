<script>
    import ButtonLink from 'components/ButtonLink/ButtonLink.svelte';

    export let href;
    export let label;

    const isButtonShown = href && label;
</script>

<style>
    @import 'Container.css';
</style>

<div class="container {isButtonShown ? 'container_home' : ''}">
    <slot />

    {#if isButtonShown}
        <ButtonLink {href}>{label}</ButtonLink>
    {/if}
</div>

<script>
    import ButtonLink from 'components/ButtonLink/ButtonLink.svelte';

    export let href;
    export let label;

    const isButtonShown = href && label;
</script>

<style>
    @import 'Container.css';
</style>

<div
    class="container"
    class:container_home={isButtonShown}>
    <slot />

    {#if isButtonShown}
        <ButtonLink {href}>{label}</ButtonLink>
    {/if}
</div>

<script>
    import ButtonLink from 'components/ButtonLink/ButtonLink.svelte';
    import EmojiContainer from 'components/EmojiContainer/EmojiContainer.svelte';

    export let href;
    export let label;
    export let showEmoji;

    const isButtonShown = href && label;
    const isEmojiShown = process.browser && showEmoji;
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

    {#if isEmojiShown}
        <EmojiContainer number={50} />
    {/if}
</div>

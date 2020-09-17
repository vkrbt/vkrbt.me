<script>
    import ButtonLink from 'components/ButtonLink/ButtonLink.svelte';
    import EmojiContainer from 'components/EmojiContainer/EmojiContainer.svelte';

    let className;
    export let href;
    export let label;
    export let showEmoji;
    export { className as class };

    const isButtonShown = href && label;
    const isEmojiShown = process.browser && showEmoji;
</script>

<div class="container {className}" class:container_home="{isButtonShown}">
    <slot />

    {#if isButtonShown}
        <ButtonLink {href}>{label}</ButtonLink>
    {/if}

    {#if isEmojiShown}
        <EmojiContainer number="{50}" />
    {/if}
</div>

<style type="text/postcss">
    .container {
        padding: 16px;
        padding-bottom: calc(16px + env(safe-area-inset-bottom));
        min-height: 100%;

        &_home {
            padding-bottom: 56px;
            padding-bottom: calc(56px + env(safe-area-inset-bottom));
        }
    }
</style>

<script>
    import EmojiContainer from 'components/EmojiContainer/EmojiContainer.svelte';
    import Menu from 'components/Menu/Menu.svelte';

    export let showEmoji;

    const isEmojiShown = process.browser && showEmoji;
</script>

<div class="container">
    <Menu />
    <slot />

    {#if isEmojiShown}
        <EmojiContainer number="{50}" />
    {/if}
</div>

<style type="text/postcss">
    .container {
        padding: 16px;
        padding-bottom: calc(80px + env(safe-area-inset-bottom));
        min-height: 100%;
    }
</style>

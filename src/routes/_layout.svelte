<script>
    import EmojiContainer from 'components/EmojiContainer/EmojiContainer.svelte';
    import Menu from 'components/Menu/Menu.svelte';
    import {stores} from '@sapper/app';

    let {page} = stores();
    let path = $page.path;
</script>

<div class="container">
    <Menu />
    <slot />

    {#if process.browser && $page.path === '/'}
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

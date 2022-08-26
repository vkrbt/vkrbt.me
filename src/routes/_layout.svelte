<script>
    import EmojiContainer from 'components/EmojiContainer/EmojiContainer.svelte';
    import Menu from 'components/Menu/Menu.svelte';
    import {stores} from '@sapper/app';

    let {page} = stores();
    let path = $page.path;
    const ROUTES_WITHOUT_MENU = ['verbs', 'me', 'cv', 'eng'].map((route) => `/${route}/`);
</script>

<div class="container">
    {#if !ROUTES_WITHOUT_MENU.includes($page.path)}
        <Menu />
    {/if}
    <slot />

    {#if process.browser && $page.path === '/'}
        <EmojiContainer number="{50}" />
    {/if}
</div>

<style>
    .container {
        padding: 16px;
        padding-bottom: calc(80px + env(safe-area-inset-bottom));
        min-height: 100%;
    }
</style>

<script>
    import Container from '../components/Container.svelte';
    import Emojis from '../components/Emojis.svelte';
</script>

<Container href="/" label="На главную">
    <h1>Страница не найдена</h1>
    {#if process.browser}
        <Emojis number={50}></Emojis>
    {/if}
</Container>

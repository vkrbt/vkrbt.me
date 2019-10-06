<script>
    import Container from 'components/Container/Container.svelte';
    import EmojiContainer from 'components/EmojiContainer/EmojiContainer.svelte';
</script>

<Container href="/" label="На главную">
    <h1>Страница не найдена</h1>
    {#if process.browser}
        <EmojiContainer number={50} />
    {/if}
</Container>

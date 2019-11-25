<script>
    import Main from 'components/Main/Main.svelte';
    import Container from 'components/Container/Container.svelte';
</script>

<svelte:head>
    <title>Влад Корбут | Разработчик интерфейсов</title>
    <meta property="description" content="" />
    <meta property="og:title" content="Влад Корбут | Разработчик интерфейсов" />
    <meta property="og:image" content="https://vkrbt.me/vkrbt@2x.jpg" />
    <meta property="og:type" content="website" />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />
</svelte:head>

<Container href="/notes/" label="Мои Заметки" showEmoji>
    <Main />
</Container>

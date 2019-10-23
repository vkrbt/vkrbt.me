<script context="module">
    import {get} from 'helpers/request';

    export async function preload() {
        try {
            const posts = await get('/api/posts?filter[order]=created%20DESC');

            return {posts};
        } catch (error) {
            console.log(error);
        }
    }
</script>

<script>
    import Container from 'components/Container/Container.svelte';
    import NoteCard from 'components/NoteCard/NoteCard.svelte';

    export let posts;
</script>

<style>
    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }
    .notes {
        max-width: 600px;
        margin: auto;
    }

    .note-item {
        padding: 16px 0;
    }
</style>

<svelte:head>
    <title>Влад Корбут | Разработчик интерфейсов | Заметки</title>
    <meta property="og:title" content="Влад Корбут | Разработчик интерфейсов | Заметки" />
    <meta property="og:image" content="https://vkrbt.me/vkrbt@2x.jpg" />
    <meta property="og:type" content="website" />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />
</svelte:head>

<Container href="/" label="На главную">
    <section class="notes">
        <h1>Мои заметки</h1>
        {#if posts}
            <ul class="notes-list">
                {#each posts as post}
                    <li class="note-item">
                        <NoteCard
                            id={post.id}
                            title={post.title}
                            description={post.description}
                        />
                    </li>
                {/each}
            </ul>
        {/if}
    </section>
</Container>

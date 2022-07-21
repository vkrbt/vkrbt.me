<script>
    import NoteCard from 'components/NoteCard/NoteCard.svelte';
    import photo from 'images/vkrbt@2x.jpg';

    export let posts;
</script>

<svelte:head>
    <title>Влад Корбут | Разработчик интерфейсов | Заметки</title>
    <meta property="og:title" content="Влад Корбут | Разработчик интерфейсов | Заметки" />
    <meta property="og:image" content="{photo}" />
    <meta property="og:type" content="website" />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />
</svelte:head>

<section class="notes">
    <h1>Мои заметки</h1>
    {#if posts}
        <ul class="notes-list">
            {#each posts as post}
                <li class="note-item">
                    <NoteCard
                        id="{post.id}"
                        title="{post.title}"
                        description="{post.description}"
                    />
                </li>
            {/each}
        </ul>
    {:else}
        <p>Пока здесь нет ничего</p>
    {/if}
</section>

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
        padding: 8px 0;
    }
</style>

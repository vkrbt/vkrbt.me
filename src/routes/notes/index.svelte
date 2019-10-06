<script context="module">
	export async function preload() {
        const res = await this.fetch('http://127.0.0.1:8000/posts');

        let posts = await res.json();

        return {posts}
	}
</script>

<script>
    import Container from 'components/Container/Container.svelte';

    export let posts;
</script>

<style>
    .notes {
        max-width: 600px;
        margin: auto;
    }

    .note-item {
        padding: 16px 0;
    }

    .note-item__head {
        margin: 0;
        padding-bottom: 16px;
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
                        <a href="/notes/{post.id}">
                            <h2 class="note-item__head">{post.title}</h2>
                            <p class="note-item__text">{post.description}</p>
                        </a>
                    </li>
                {/each}
            </ul>
        {/if}
    </section>
</Container>

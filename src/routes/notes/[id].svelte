<script context="module">
    import {get} from 'helpers/request';

    export async function preload({params}) {
        try {
            const post = await get('/api/posts/' + params.id);

            return {post};
        } catch (error) {
            this.error(404, 'Not found');
        }
    }
</script>

<script>
    import Note from 'components/Note/Note.svelte';

    export let post;
</script>

<svelte:head>
    <title>{post.title} | Заметки Влада Корбута</title>
    <meta name="description" content="{post.description}" />
    <meta property="og:title" content="{post.title} | Заметки Влада Корбута" />
    <meta property="og:description" content="{post.description}" />
    <meta property="og:type" content="article" />
</svelte:head>

{#if post}
    <Note>
        <h1>{post.title}</h1>
        {@html post.body}
    </Note>
{/if}

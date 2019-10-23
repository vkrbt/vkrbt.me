<script context="module">
    import {get} from 'helpers/request';

	export async function preload({params}) {
        try {
            const post = await get('/api/posts/' + params.id);

            return {post}
        } catch (error) {
            console.log(error);
        }
	}
</script>

<script>
    import Container from 'components/Container/Container.svelte';
    import Note from 'components/Note/Note.svelte';

    export let post;
</script>

<svelte:head>
    <title>{post.title}</title>
    <meta name="description" content={post.description} />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.description} />
    <meta property="og:type" content="article" />
</svelte:head>

<Container href="/notes" label="К заметкам">
    {#if post}
        <Note>
            <h1>{post.title}</h1>
            {@html post.body}
        </Note>
    {/if}
</Container>

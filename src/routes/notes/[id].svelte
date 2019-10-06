<script context="module">
	export async function preload({params}) {
        const res = await this.fetch('http://127.0.0.1:8000/posts/' + params.id);

        let post = await res.json();

        post.body = post.body + '<script>alert(123)<\/script>';

        return {post}
	}
</script>

<script>
    import Container from 'components/Container/Container.svelte';
    import Note from 'components/Note/Note.svelte';
    import sanitizeHtml from 'sanitize-html';

    export let post;

    $: postBody = post && post.body && sanitizeHtml(post.body);
</script>

<svelte:head>
    <title>{post.title}</title>
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.description} />
    <meta property="og:type" content="article" />
</svelte:head>

<Container href="/notes" label="К заметкам">
    <Note>
        {#if post}
            <h1>{post.title}</h1>
            {@html postBody}
        {/if}
    </Note>
</Container>

<script>
    export let id;
    export let title;
    export let description;
</script>

<style>
    h2 {
        margin: 0;
    }
</style>

<a href="/notes/{id}">
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
</a>

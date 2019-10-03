<script>
	import Container from '../../components/Container.svelte';
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

<Container showHome>
    <section class="notes">
        <h1>Мои заметки</h1>
        <ul class="notes-list">
            <li class="note-item">
                <a href="/notes/1">
                    <h2 class="note-item__head">Приложение-привычка</h2>
                    <p class="note-item__text">Как я заменял привычку</p>
                </a>
            </li>
        </ul>
    </section>
</Container>
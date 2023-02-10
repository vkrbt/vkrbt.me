<script>
    import NoteCard from 'components/NoteCard/NoteCard.svelte';
    import photo from 'images/vkrbt-new@2x.jpg';
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
    <ul class="notes-list">
        <li class="note-item">
            <NoteCard
                date="2023.02.10"
                id="my-male-research"
                title="Про уход папы"
                description="И как на это отразилось на мне"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2023.01.27"
                id="memes-channel"
                title="История создания канала с мемами"
                description="И как он стал шагом к публичной деятельности"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2023.01.22"
                id="insta-workout"
                title="Тренировки и инстаграм"
                description="Что мне помогает не слиться"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2023.01.02"
                id="new-year-loneliness"
                title="Новогоднее одиночество"
                description="И как я с ним обошелся"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2022.10.05"
                id="texts-to-exes"
                title="Общаться ли с бывшими?"
                description="Делюсь своим опытом"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2022.08.31"
                id="frightened-laughter"
                title="Cтрашно быть слабым"
                description="Защитный механизм в страхе"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2022.08.26"
                id="lost-and-found"
                title="Я потерял все, что привез с Бали"
                description="О том, как приходит новый опыт"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2022.08.18"
                id="how-i-started-to-live"
                title="Как я начал жить свою жизнь"
                description="О моем кризисе в карьере"
            />
        </li>
    </ul>
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

    .hidden {
        display: none;
    }
</style>

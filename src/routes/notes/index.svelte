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
                date="2023.03.13"
                id="my-male-research"
                title="Путешествия одному"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2023.02.10"
                id="my-male-research"
                title="Про уход папы"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2023.01.27"
                id="memes-channel"
                title="История создания канала с мемами"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2023.01.22"
                id="insta-workout"
                title="Тренировки и инстаграм"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2023.01.02"
                id="new-year-loneliness"
                title="Новогоднее одиночество"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2022.10.05"
                id="texts-to-exes"
                title="Общаться ли с бывшими?"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2022.08.31"
                id="frightened-laughter"
                title="Cтрашно быть слабым"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2022.08.26"
                id="lost-and-found"
                title="Я потерял все, что привез с Бали"
            />
        </li>
        <li class="note-item">
            <NoteCard
                date="2022.08.18"
                id="how-i-started-to-live"
                title="Как я начал жить свою жизнь"
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

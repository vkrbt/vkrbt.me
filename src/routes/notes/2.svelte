<script>
    import Container from 'components/Container/Container.svelte';
    import Note from 'components/Note/Note.svelte';
</script>

<Container href="/notes" label="К заметкам">
    <Note>
        <h1>Need Pray More</h1>
        <p>На сайте <a href="https://www.npmjs.com/">npmjs.com</a> для десктопных пользователей придумали замечательный способ скоротать немного времени — почитать пользовательские расшифровки для аббревиатуры NPM.</p>
        <p>Для особо любопытных сделали возможность покликать в заголовок и почитать другие варианты, а после 10 кликов вас отправит на <a href="https://github.com/npm/npm-expansions">репозиторий с расшифровками</a>, куда каждый может добавить свой вариант.</p>
        <h3>Больше всего мне понравились</h3>
        <ul>
            <li>Neo's Personal Matrix</li>
            <li>Neverending Puppy Marathon</li>
            <li>Nine Percent Milk</li>
            <li>Native Package Manager</li>
            <li>naM ,sevitcepsreP weN</li>
            <li>NaN Producing Misery</li>
            <li>National Poo Museum</li>
            <li>noop(); pop(); map();</li>
        </ul>
        <p>В репозитории есть небольшой <a href="https://github.com/npm/npm-expansions/blob/master/README.md">гайд</a> о том, какой должна быть фраза, если вы хотите, чтоб ее приняли, особенно порадовал заголовок <i>No More Please</i>.</p>
    </Note>
</Container>

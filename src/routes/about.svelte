<script>
    import src2x from 'images/vkrbt@2x.jpg';
    import {getPluralForm} from 'helpers/getPluralForm';
    import {getMyAge} from 'helpers/getMyAge';

    let ageSring = getPluralForm(getMyAge(), ['год', 'года', 'лет']);
</script>

<section class="about">
    <h1>Обо мне</h1>

    <p>
        Мне {ageSring}. Живу сейчас в Минске. Мой карьерный путь описан <a href="/me/">здесь</a>.
    </p>
    <p>
        Мои мысли, выраженные текстом, можно <a href='/notes/'>почитать здесь</a>.
    </p>
    <p>
        Я увлекаюсь фотографией, снимаю на пленку. Мои снимки можно <a rel='noopener noreferrer' target='_blank' href="https://www.instagram.com/vkrbt.film/">понаблюдать в инсте</a>.
    </p>
    <p>Еще я админ <a href="https://t.me/vkuspi">слегка популярного канала с мемами в телеграме</a>. Приходите, вместе посмеемся.</p>
    <p>
        Раньше я увлекался барной культурой, готовил коктейли дома, но сейчас перегорел. Предпочитаю белое вино и пиво, но больше всего люблю водичку.
    </p>
    <p>
        Хожу на терапию, обучаюсь на гештальт-терапевта. Не планирую становиться психотерапевтом, скорее хочу получить знания и навыки для себя.
    </p>
    <p>
        А <a rel='noopener noreferrer' target='_blank' href="https://www.instagram.com/vkrbt/">здесь моя личная инста</a>. А
        <a href="https://t.me/vkrbt">здесь телеграм</a>.
    </p>

    <a class="hidden" href="/me/">cv</a>
    <a class="hidden" href="/cv/">cv detailed</a>
    <a class="hidden" href="/eng/">cv eng</a>
    <a class="hidden" href="/verbs/">irregular verbs</a>
</section>

<svelte:head>
    <title>Влад Корбут</title>
    <meta property="description" content="" />
    <meta property="og:title" content="Влад Корбут | Разработчик интерфейсов" />
    <meta property="og:image" content="{src2x}" />
    <meta property="og:type" content="website" />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />
</svelte:head>

<style>
    .about {
        max-width: 600px;
        margin: auto;
    }

    .hidden {
        display: none;
    }

    p + p {
        margin-top: 1em;
    }
</style>

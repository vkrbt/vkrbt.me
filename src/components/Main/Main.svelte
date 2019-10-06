<script>
    import EmojiContainer from 'components/EmojiContainer/EmojiContainer.svelte';

    let birthday = Date.UTC(1998, 5, 8);
    let today = Date.now();
    let ageInSeconds = today - birthday;

    export let ageInYears = Math.floor(ageInSeconds / (60 * 60 * 24 * 365.25 * 1000));
</script>

<style>
    @import 'Main.css';
</style>

<main class="content">
    <img class="picture" src="vkrbt.jpg" srcset="vkrbt@2x.jpg 2x" alt="мой портрет" />
    <div class="description">
        <h1>Я Влад Корбут</h1>
        <h2>Разработчик интерфейсов</h2>
        <p>Мне {ageInYears}, а живу я Минске.</p>
        <p>
            Для связи со мной можно использовать
            <a href="https://t.me/vkrbt/">телеграм</a>
            или
            <a href="mailto:vkrbt.me">email</a>
        </p>
    </div>
</main>
{#if process.browser}
    <EmojiContainer number={50} />
{/if}

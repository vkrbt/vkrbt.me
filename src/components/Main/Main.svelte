<script>
    import src from 'images/vkrbt.jpg';
    import src2x from 'images/vkrbt@2x.jpg';

    let birthday = Date.UTC(1998, 5, 8);
    let today = Date.now();
    let ageInSeconds = today - birthday;

    export let ageInYears = Math.floor(ageInSeconds / (60 * 60 * 24 * 365.25 * 1000));
</script>

<main class="content">
    <img class="picture" {src} srcset="{src2x} 2x" alt="мой портрет" />
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

<style type="text/postcss">
    .content {
        display: flex;
        padding: 16px;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    .description {
        min-height: 200px;
        padding-left: 16px;
        background: rgba(255, 255, 255, 0.7);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h2 {
        margin-top: 0;
    }

    @media screen and (max-width: 576px) {
        .description {
            padding-left: 0;
            text-align: center;
        }
        .content {
            flex-direction: column;
        }
    }

    .picture {
        width: 200px;
        height: 200px;
        clip-path: polygon(93% 8%, 100% 96%, 0% 100%, 5% 0%);
    }
</style>

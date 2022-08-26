<script>
    import src from 'images/vkrbt.jpg';
    import src2x from 'images/vkrbt@2x.jpg';
    import {getPluralForm} from 'helpers/getPluralForm';
    import {getMyAge} from 'helpers/getMyAge';

    let ageSring = getPluralForm(getMyAge(), ['год', 'года', 'лет']);
</script>

<main class="content">
    <div class="wrapper">
        <img class="picture" {src} srcset="{src2x} 2x" alt="мой портрет" />
        <div class="description">
            <h1>Я Влад Корбут</h1>
            <p>
                Мне {ageSring}. Живу сейчас в Минске.
            </p>
            <p>
                Подробнее <a href="/about/">здесь</a>.
            </p>
        </div>
    </div>
</main>

<style type="text/postcss">
    .content {
        display: flex;
        flex-direction: column;
        padding: 16px;
        justify-content: center;
        align-items: center;
        z-index: 1;
        margin-top: 60px;
    }

    .wrapper {
        background: rgba(255, 255, 255, 0.7);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px;
    }

    .description {
        min-height: 200px;
        padding-left: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 400px;
    }

    h2 {
        margin-top: 0;
    }

    .picture {
        width: 200px;
        height: 200px;
        clip-path: polygon(93% 8%, 100% 96%, 0% 100%, 5% 0%);
    }

    @media screen and (max-width: 576px) {
        .wrapper, .content {
            padding: 0;
        }

        .content {
            margin-top: 48px;
        }
    }
</style>

<script>
    import src from 'images/vkrbt.jpg';
    import src2x from 'images/vkrbt@2x.jpg';
    import {SECONDS_IN_YEAR} from 'constants/default';
    import {getPluralForm} from 'helpers/getPluralForm';
    import {decimalRound} from 'helpers/decimalRound';

    let startExperience = Date.UTC(2017, 8, 29);
    let today = Date.now();
    let experience = (today - startExperience) / SECONDS_IN_YEAR;

    let experienceSting = getPluralForm(decimalRound(experience, 1), [
        'год',
        'года',
        'лет',
    ]);
</script>

<svelte:head>
    <title>Влад Корбут | Разработчик интерфейсов</title>
    <meta property="description" content="" />
    <meta property="og:title" content="Влад Корбут | Разработчик интерфейсов" />
    <meta property="og:image" content="{src2x}" />
    <meta property="og:type" content="website" />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />
</svelte:head>

<div class="notes">
    <div class="head">
        <img class="picture" {src} srcset="{src2x} 2x" alt="мой портрет" />
        <div>
            <h1>Влад Корбут</h1>
            <h2>Разработчик интерфейсов</h2>
        </div>
    </div>
    <h3>О Себе</h3>
    <p>Люблю простые и удобные интерфейсы. Делаю сложные вещи проще.</p>
    <p>Увлекаюсь барной культурой, катаюсь на лонгборде. Люблю пиццу маргарита</p>
    <h3>Контакты</h3>
    <ul>
        <li>
            <a href="https://t.me/vkrbt">Телеграм</a>
        </li>
        <li>
            <a href="https://github.com/vkrbt">Github</a>
        </li>
        <li>
            <a href="mailto:vkrbt@ya.ru" data-mail="vkrbt@ya.ru" class="email"><span>Почта</span></a>
        </li>
    </ul>
    <h3>Опыт работы<span class="experience">{experienceSting}</span></h3>
    <ul>
        <li>
            <h4>Яндекс. октябрь 2018 — настоящее время</h4>
            <ul>
                <li>
                    <a href="https://yandex.ru/q">Яндекс.Кью (октябрь 2019 — настоящее время)</a>
                    <h4>Основные обязанности</h4>
                    <ul>
                        <li>Разработка интерфейса сервиса</li>
                        <li>Редизайн крупных основных частей приложения</li>
                        <li>Плотная работа с продуктом и дизайном</li>
                        <li>Интеграция с видеосервисом</li>
                        <li>Работы по налаживанию инфраструктуры</li>
                        <li>Автоматизация ежедневной рутины</li>
                        <p class="description">
                            За время работы над сервисом реализовал несколько новых фичей в приложении.
                        </p>
                        <p class="description">
                            В сервисе появился кардинально новый функционал — сообщества.
                            Со своей стороны я разрабатывал создание и настройки сообщества, а так же некоторую дистрибуцию сообществ.
                            Так реализовывал интерфейс для репостов контента.
                        </p>
                        <p class="description">
                            Так как Кью это сервис про вопросы и ответы, в какой-то момент показалось недостаточно только текстовых ответов.
                            Я реализовал полностью функционал добавления видео, а так же дистрибуцию видео в сервисе.
                            В том числе карусели с предпросмотром при скролле и просмотрщик видео.
                        </p>
                        <p class="description">
                            Так же занимался переходом на новые технологи и API, а так же расширением поддержки сайта в старых браузерах.
                            При разработке некоторых частей сервиса смог уменьшить время разработки благодаря оптимизации взаимодействия с интерфейсом.
                        </p>
                        <p>
                            <b>Используемые технологии: </b> Typescript, React, MobX, CSS-Modules, PostCSS, Webpack, Gulp, Babel, ESLint, Koa
                        </p>
                    </ul>
                </li>
                <li>
                    <a href="https://yandex.ru/collections">
                        Яндекс.Коллекции (октябрь 2018 — октябрь 2019)
                    </a>
                    <h4>Основные обязанности</h4>
                    <ul>
                        <li>Разработка интерфейса сервиса</li>
                        <li>Внедрение монетизации в сервис</li>
                        <li>Оптимизация скорости приложения</li>
                        <p class="description">За время работы в коллекциях внедрил рекламу в сервис, при этом органично встроил ее в контент, тем самым увеличив доход сервиса.
                            Внедрял мониторинги метрик сервиса для последующего анализа и ускорения.
                            Улучшал скоростные метрики сервиса за счет удаления лишнего кода либо бандлирования его.
                            Писал интеграционные, E2E и unit-тесты.
                        </p>
                        <p>
                            <b>Используемые технологии: </b> Typescript, React, Redux, Backbone, LESS+SCSS, PostCSS, Webpack, Gulp, Babel, ESLint, Koa
                        </p>
                    </ul>
                </li>
                <li>Преподавание в ШРИ(школе разработки интерфейсов). Менторство студентов</li>
            </ul>
        </li>
        <li>
            <h4>ITechArt. август 2017 — октябрь 2018</h4>
            <ul>
                <li>
                    Сервис для коллекционирования произведения искусства
                    <h4>Основные обязанности</h4>
                    <ul>
                        <li>Разработка архитектуры</li>
                        <li>Реализация мультиролевого просмотра</li>
                        <li>Разработка панели администратора</li>
                    </ul>
                </li>
                <li>
                    Сайт для продажи БАДов
                    <h4>Основные обязанности</h4>
                    <ul>
                        <li>Редизайн интерфейса</li>
                        <li>Разработка формы оплаты. Внедрение Stripe</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    <h3>Образование</h3>
    <ul>
        <li>Магистратура БГУ МехМат(Веб-программирование и ИТ) 2019-2021</li>
        <li>БГУ МехМат(Веб-программирование и ИТ) 2015-2019</li>
    </ul>
    <h3>Дополнительное образование</h3>
    <ul>
        <li>Яндекс ШРИ 2018г.</li>
        <li>ITechArt(стажировка) 2017г.</li>
    </ul>
    <h3>Используемые технологии</h3>
    <ul>
        <li>Typescript</li>
        <li>React</li>
        <li>Mobx</li>
        <li>Redux</li>
        <li>Webstorm</li>
        <li>ZSH</li>
        <li>Prettier</li>
        <li>Figma</li>
    </ul>
</div>

<style>
    .head {
        display: flex;
        align-items: center;
    }

    .experience {
        margin-left: 4px;
        opacity: 0.5;
    }

    @media screen and (max-width: 576px) {
        .head {
            align-items: flex-start;
            flex-direction: column;
        }
    }
    .picture {
        float: left;
        margin: 0 16px 16px 0;
    }
    .notes {
        padding: 16px;
        max-width: 600px;
        margin: auto;
    }

    h4 {
        margin-top: 4px;
        margin-bottom: 4px;
    }
    p + p {
        margin-top: 4px;
    }

    .description {
        font-style: italic;
        margin-top: 8px;
    }

    .description + .description {
        margin-top: 4px;
    }

    li + li {
        margin-top: 4px;
    }

    ul {
        padding-left: 28px;
    }

    @media screen and (max-width: 576px) {
        ul {
            padding-left: 16px;
        }
    }
</style>

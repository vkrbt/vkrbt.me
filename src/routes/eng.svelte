<script>
    import src from 'images/vkrbt.jpg';
    import src2x from 'images/vkrbt@2x.jpg';
    import {SECONDS_IN_YEAR} from 'constants/default';
    import {getPluralForm} from 'helpers/getPluralForm';
    import {decimalRound} from 'helpers/decimalRound';

    let startExperience = Date.UTC(2017, 8, 29);
    let today = Date.now();
    let experience = (today - startExperience) / SECONDS_IN_YEAR;

    let experienceSting = getPluralForm(decimalRound(experience, 1), ['year', 'years', 'years']);
</script>

<svelte:head>
    <title>Vlad Korbut | Frontend developer</title>
    <meta property="description" content="" />
    <meta property="og:title" content="Vlad Korbut | Frontend developer" />
    <meta property="og:image" content="{src2x}" />
    <meta property="og:type" content="website" />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />
</svelte:head>

<div class="notes">
    <div class="head">
        <img class="picture" {src} srcset="{src2x} 2x" alt="my portrait" />
        <div>
            <h1>Vlad Korbut</h1>
            <h2>Frontend developer</h2>
        </div>
    </div>
    <h3>About</h3>
    <p>I like simple and useful interfaces. I do complex things simpler</p>
    <p>I'm fond of bartending. My favorite pizza is Margarita</p>
    <h3>Contacts</h3>
    <ul>
        <li>
            <a href="https://t.me/vkrbt">Telegram</a>
        </li>
        <li>
            <a href="https://github.com/vkrbt">Github</a>
        </li>
        <li>
            <a href="mailto:vkrbt@ya.ru" data-mail="vkrbt@ya.ru" class="email"><span>Mail</span></a>
        </li>
    </ul>
    <h3>
        Experience
        <span class="experience">{experienceSting}</span>
    </h3>
    <ul>
        <li>
            <h4>Yandex. October 2018 — now</h4>
            <ul>
                <li>
                    <a href="https://yandex.ru/q">Yandex.Q (October 2019 — now)</a>
                    <h4>Responsibilities</h4>
                    <ul>
                        <li>UI development</li>
                        <li>Beta testing application development</li>
                        <li>UI redesign of main parts of the application</li>
                        <li>Close cooperation with a design team</li>
                        <li>Video infrastructure integration</li>
                        <li>Infrastructure improvement</li>
                        <li>Everyday routine automatization</li>
                    </ul>
                </li>
                <li>
                    <a href="https://yandex.ru/collections">
                        Yandex.Collections (October 2018 — October 2019)
                    </a>
                    <h4>Responsibilities</h4>
                    <ul>
                        <li>UI development</li>
                        <li>Ads integration</li>
                        <li>Performance improvement</li>
                    </ul>
                </li>
                <li>Teaching in the FDS(Frontend Development School). Students mentoring</li>
            </ul>
        </li>
        <li>
            <h4>ITechArt. August 2017 — October 2018</h4>
            <ul>
                <li>
                    Artworks collection application
                    <h4>Responsibilities</h4>
                    <ul>
                        <li>Architecture design</li>
                        <li>Multirole browsing developing</li>
                        <li>Development of admin panel</li>
                    </ul>
                </li>
                <li>
                    Biological Additives shop
                    <h4>Responsibilities</h4>
                    <ul>
                        <li>UI redesign</li>
                        <li>Payment form development. Stripe integration</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    <h3>Education</h3>
    <ul>
        <li>Master degree. BSU Mechanics and Mathematics Faculty 2019-2021</li>
        <li>Bachelor degree. BSU Mechanics and Mathematics Faculty 2015-2019</li>
    </ul>
    <h3>Additional education</h3>
    <ul>
        <li>Yandex FDS(Frontend Development School) 2018</li>
        <li>ITechArt internship program 2017</li>
    </ul>
    <h3>Technologies</h3>
    <ul>
        <li>Typescript</li>
        <li>React</li>
        <li>NodeJS</li>
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

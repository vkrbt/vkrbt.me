<script>
    import src from 'images/vkrbt.jpg';
    import src2x from 'images/vkrbt@2x.jpg';
    import {SECONDS_IN_YEAR, SECONDS_IN_MONTH} from 'constants/default';
    import {getPluralForm} from 'helpers/getPluralForm';
    import {decimalRound} from 'helpers/decimalRound';

    let startExperience = Date.UTC(2017, 8, 29);
    let today = Date.now();
    let experienceYears = decimalRound((today - startExperience) / SECONDS_IN_YEAR);
    let experienceMonths = decimalRound((today - startExperience) / SECONDS_IN_MONTH) % 12;
    experienceYears = getPluralForm(experienceYears, ['year', 'years', 'years']);
    let experienceMonth = getPluralForm(decimalRound(experienceMonths, 1), ['month', 'months', 'months']);
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
    <p>I like simple and convenient interfaces. I do complex things simply</p>
    <p>I paint my nails, shoot on film. My favorite pizza is Margherita</p>
    <h3>Contacts</h3>
    <ul>
        <li>
            <a target='_blank' href="mailto:vkrbt@ya.ru" data-print-label="vkrbt@ya.ru" class="email"><span>Mail</span></a>
        </li>
        <li>
            <a target='_blank' href="https://t.me/vkrbt" data-print-label="t.me/vkrbt"><span>Telegram</span></a>
        </li>
        <li>
            <a target='_blank' href="https://github.com/vkrbt" data-print-label="github.com/vkrbt"><span>Github</span></a>
        </li>
        <li>
            <a target='_blank' href="https://www.instagram.com/vkrbt.film/"  data-print-label="instagram.com/vkrbt.film" class="email"><span>My film photos on Instagram</span></a>
        </li>
    </ul>
    <h3>
        Experience
        <span class="experience">{experienceYears} {experienceMonth}</span>
    </h3>
    <ul>
        <li>
            <h4>Yandex. October 2018 — now</h4>
            <ul>
                <li>
                    <a href="https://yandex.ru/q">Yandex.Q (October 2019 — now)</a>
                    <h4>Main achievements</h4>
                    <ul>
                        <li>Set up CI and deployment flow. Made deployment process simpler.</li>
                        <li>Developed service for generating OpenGraph images. Improved speed and complexity of development.</li>
                        <li>Created service for testing developed features. Improved stability of testing UI features.</li>
                    </ul>
                    <h4>Responsibilities</h4>
                    <ul>
                        <li>UI development</li>
                        <li>Tech infrastructure improvement</li>
                        <li>CI maintaining</li>
                        <li>Beta testing application development</li>
                        <li>UI redesign of main parts of the application</li>
                        <li>Video infrastructure integration</li>
                        <li>Management of technical tasks</li>
                        <li>Teammates mentoring</li>
                        <li>Everyday routine automatization</li>
                        <li>Close cooperation with a design team</li>
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
                <li>Teaching in the FDS(Frontend Development School). Students' mentoring</li>
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
                        <li>Multirole browsing development</li>
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
        <li>Unfinished Master degree. BSU Mechanics and Mathematics Faculty 2019</li>
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
        padding-left: 20px;
    }

    @media screen and (max-width: 576px) {
        ul {
            padding-left: 16px;
        }
    }
</style>

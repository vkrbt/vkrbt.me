import Image from "next/image";
import styles from "./page.module.css";

const SECONDS_IN_YEAR = 365.25 * 24 * 60 * 60 * 1000;

export default function Home() {
    let startExperience = Date.UTC(2017, 8, 29);
    let today = Date.now();
    let experience = Math.round((today - startExperience) / SECONDS_IN_YEAR);

    return (
        <div className={styles.notes}>
            <div className={styles.head}>
                <Image src="/photo.jpeg" width="200" height="200" className={styles.picture} alt='my portrait' />
                <div>
                    <h1>Vlad Korbut</h1>
                    <h2>Frontend developer</h2>
                </div>
            </div>
            <h3>About</h3>
            <p>My favourite thing in web development is to automate stuff and communicate with other people</p>
            <p>I prefer to make things as easy to use as possible</p>
            <h3>Contacts</h3>
            <ul>
                <li>
                    <a
                        target='_blank'
                        href='mailto:vkrbt@ya.ru'
                        data-print-label='vkrbt@ya.ru'
                        className={styles.email}
                    >
                        <span className={styles.contact}>Mail</span>
                        <span className={styles.contactPrint}>vkrbt@ya.ru</span>
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        href='https://t.me/vkrbt'
                        data-print-label='t.me/vkrbt'
                    >
                        <span className={styles.contact}>Telegram</span>
                        <span className={styles.contactPrint}>t.me/vkrbt</span>
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        href='https://github.com/vkrbt'
                        data-print-label='github.com/vkrbt'
                    >
                        <span className={styles.contact}>Github</span>
                        <span className={styles.contactPrint}>github.com/vkrbt</span>
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        href='https://www.instagram.com/vkrbt/'
                        data-print-label='instagram.com/vkrbt'
                        className={styles.email}
                    >
                        <span className={styles.contact}>My non-tech blog</span>
                        <span className={styles.contactPrint}>instagram.com/vkrbt</span>
                    </a>
                </li>
            </ul>
            <h3>
                Experience
                <span className={styles.experience}>{experience} years</span>
            </h3>
            <h3>
                <a href='https://bookmate.ru/'>Bookmate. 2022—now</a>
            </h3>
            <h4>Main achievements</h4>
            <ul>
                <li>Made redesign and implemented design system</li>
                <li>Improved build and release speed</li>
                <li>Enhanced analytics tracking</li>
                <li>Set up release flow for external team</li>
                <li>Set up tools for easy task testing</li>
            </ul>
            <h4>Responsibilities</h4>
            <ul>
                <li>Audio player integration</li>
                <li>Management of technical tasks</li>
                <li>Teammates mentoring</li>
                <li>Everyday routine automatization</li>
                <li>Close cooperation with a design team</li>
                <li>UI development</li>
                <li>Tech infrastructure improvement</li>
                <li>CI maintaining</li>
                <li>Beta testing application development</li>
                <li>UI redesign of main parts of the application</li>
            </ul>
            <h3><a href='https://yandex.ru/q'>Yandex.Q 2019 — 2022</a></h3>
            <h4>Main achievements</h4>
            <ul>
                <li>Set up CI and deployment flow. Made deployment process simpler.</li>
                <li>Developed service for generating OpenGraph images. Improved speed and complexity of
                    development.
                </li>
                <li>Created service for testing developed features. Improved stability of testing UI
                    features.
                </li>
            </ul>
            <h4>Responsibilities</h4>
            <ul>
                <li>UI redesign of main parts of the application</li>
                <li>Video infrastructure integration</li>
                <li>Teammates mentoring</li>
                <li>Management of technical tasks</li>
                <li>Everyday routine automatization</li>
                <li>Close cooperation with a design team</li>
                <li>UI development</li>
                <li>Tech infrastructure improvement</li>
                <li>CI maintaining</li>
                <li>Beta testing application development</li>
            </ul>
            <h3>
                <a href='https://yandex.ru/collections'>
                    Yandex.Collections 2018 — 2019
                </a>
            </h3>
            <h4>Responsibilities</h4>
            <ul>
                <li>UI development</li>
                <li>Ads integration</li>
                <li>Performance improvement</li>
            </ul>
            <li>Teaching in the FDS(Frontend Development School). Students&apos; mentoring</li>
            <h4>ITechArt. 2017—2018</h4>
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
            <h3>Education</h3>
            <ul>
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
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>Apollo</li>
                <li>Mobx</li>
                <li>Redux</li>
                <li>Webstorm</li>
                <li>ZSH</li>
                <li>Prettier</li>
                <li>Figma</li>
            </ul>
        </div>
    );
}

import Image from "next/image";
import styles from "./page.module.css";
import {clsJoin} from '@/helpers/clsJoin';

const SECONDS_IN_YEAR = 365.25 * 24 * 60 * 60 * 1000;

export default function Home() {
    let startExperience = Date.UTC(2017, 8, 29);
    let today = Date.now();
    let experience = Math.round((today - startExperience) / SECONDS_IN_YEAR);

    return (
        <div className={styles.notes}>
            <div className={styles.head}>
                <div>
                    <h1>Vlad Korbut</h1>
                    <h2>Frontend developer</h2>
                    <div className={styles.contacts}>
                        <a
                            target='_blank'
                            href='mailto:vkrbt@ya.ru'
                            className={styles.email}
                        >
                            <span className={styles.contact}>Mail</span>
                            <span className={styles.contactPrint}>vkrbt@ya.ru</span>
                        </a>
                        <a
                            target='_blank'
                            href='https://t.me/vkrbt'
                        >
                            <span className={styles.contact}>Telegram</span>
                            <span className={styles.contactPrint}>t.me/vkrbt</span>
                        </a>
                        <a
                            target='_blank'
                            href='https://github.com/vkrbt'
                        >
                            <span className={styles.contact}>Github</span>
                            <span className={styles.contactPrint}>github.com/vkrbt</span>
                        </a>
                        <a
                            target='_blank'
                            href='https://www.instagram.com/vkrbt/'
                        >
                            <span className={styles.contact}>Insta</span>
                            <span className={styles.contactPrint}>instagram.com/vkrbt</span>
                        </a>
                    </div>
                </div>
                <Image src='/photo.jpeg' width='160' height='160' className={styles.picture} alt='my portrait' />
            </div>
            <h3>
                Work Experience
                <span className={styles.experience}>{experience} years</span>
            </h3>
            <h3>About</h3>
            <p>Passionate web developer with a focus on result achieving results, optimizing processes, improving
                communication, and creating user-friendly experiences.</p>
            <p>Seeking a challenging web development role with the opportunity of leadership development.</p>

            <h3 className={styles.headline}>
                <a href='https://bookmate.ru/'>Bookmate</a>
                <span className={styles.dates}>2022 — now</span>
            </h3>
            <p className={styles.jobtitle}>Senior Frontend Developer</p>
            <ul className={styles.experienceInfo}>
                <li>Made redesign and implemented design system</li>
                <li>Improved build and release speed</li>
                <li>Enhanced analytics tracking</li>
                <li>Set up CI release flow for external team</li>
                <li>Set up tools for easy task testing</li>
            </ul>
            <h4>Responsibilities</h4>
            <ul className={styles.experienceInfo}>
                <li>Audio player integration</li>
                <li>Technical tasks management</li>
                <li>Teammates mentoring</li>
                <li>Everyday routine automatization</li>
                <li>Close cooperation with a design team</li>
                <li>UI development</li>
                <li>Tech infrastructure improvement</li>
                <li>CI maintaining</li>
                <li>Beta testing application development</li>
                <li>UI redesign of main parts of the application</li>
            </ul>
            <h3 className={styles.headline}><a href='https://yandex.ru/q'>Yandex.Q</a><span className={styles.dates}>2019 — 2022</span>
            </h3>
            <p className={styles.jobtitle}>Senior Frontend Developer</p>
            <ul className={styles.experienceInfo}>
                <li>Set up CI and deployment flow. Made deployment process simpler.</li>
                <li>Developed service for generating OpenGraph images. Improved speed and complexity of
                    development.
                </li>
                <li>Created service for testing developed features. Improved stability of testing UI
                    features.
                </li>
            </ul>
            <h4>Responsibilities</h4>
            <ul className={styles.experienceInfo}>
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
            <h3 className={styles.headline}>
                <a href='https://yandex.ru/collections'>
                    Yandex.Collections
                </a>
                <span className={styles.dates}>2018 — 2019</span>
            </h3>
            <p className={styles.jobtitle}>Frontend Developer</p>
            <h4>Responsibilities</h4>
            <ul className={styles.experienceInfo}>
                <li>UI development</li>
                <li>Ads integration</li>
                <li>Performance improvement</li>
                <li>Teaching in the FDS(Frontend Development School). Students&apos; mentoring</li>
            </ul>
            <h3 className={styles.headline}>
                <a href="https://itechartgroup.by/">
                    ITechArt
                </a>
                <span className={styles.dates}>
                2017—2018
                </span>
            </h3>
            <p className={styles.jobtitle}>Frontend Developer</p>
            <h4>
                Artworks collection application
            </h4>
            <h4>Responsibilities</h4>
            <ul className={styles.experienceInfo}>
                <li>Architecture design</li>
                <li>Multirole browsing development</li>
                <li>Development of admin panel</li>
            </ul>
            <h4>
                Biological Additives shop
            </h4>
            <h4>Responsibilities</h4>
            <ul className={styles.experienceInfo}>
                <li>UI redesign</li>
                <li>Payment form development. Stripe integration</li>
            </ul>
            <h3 className={styles.headline}>Education</h3>
            <ul className={styles.experienceInfo}>
                <li>Bachelor degree. BSU Mechanics and Mathematics Faculty 2015-2019</li>
            </ul>
            <h3 className={styles.headline}>Additional education</h3>
            <ul className={styles.experienceInfo}>
                <li>Yandex FDS(Frontend Development School) 2018</li>
                <li>ITechArt internship program 2017</li>
            </ul>
            <h3 className={styles.headline}>Technologies</h3>
            <div className={clsJoin(styles.technologies, styles.experienceInfo)}>
                <span>Typescript</span>
                <span>React</span>
                <span>NextJS</span>
                <span>NodeJS</span>
                <span>Apollo</span>
                <span>Mobx</span>
                <span>Redux</span>
                <span>CI</span>
                <span>Webstorm</span>
                <span>ZSH</span>
                <span>Prettier</span>
                <span>Figma</span>
            </div>
        </div>
    );
}

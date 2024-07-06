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
            <p>Seeking a challenging frontend development role in a startup or product company, with opportunities for
                leadership development.</p>
            <h3 className={styles.headline}>
                <a href='https://bookmate.ru/'>Bookmate</a>
                <span className={styles.dates}>2022 — now</span>
            </h3>
            <p className={styles.jobtitle}>Senior Frontend Developer</p>
            <p>A subscription-based content service offering a wide range of books.</p>
            <ul className={styles.experienceInfo}>
                <li>
                    Redesigned the entire project
                    <span className={styles.experienceMore}>Organized collaboration with the design team for the complete redesign of the website and successfully implemented it within a short timeframe.</span>
                </li>
                <li>
                    Accelerated and optimized CI/CD and deployment processes
                    <span className={styles.experienceMore}>Set up CI/CD and managed the optimization of release speeds. Migrated to pnpm, resulting in more than a 2x increase in build speed.</span>
                </li>
                <li>
                    Managed technical projects
                    <span className={styles.experienceMore}>Organized and set up CI for the outstaff team, and provided consultation and support for the development of marketing landing pages for the company.</span>
                </li>
                <li>
                    Set up infrastructure for testing
                    <span className={styles.experienceMore}>Developed a NodeJS application for deploying beta environments for each pull request. Deployed and configured load balancing and proxying.</span>
                </li>
                <li>Resolved tasks under high uncertainty within tight deadlines</li>
                <li>Consulted colleagues on Git, CI/CD, and deployment processes</li>
                <li>Integrated audio listening feature into the service</li>
                <li>Refactored legacy project to modern tech stack</li>
                <li>Worked in a distributed team</li>
            </ul>
            <div className={clsJoin(styles.technologies, styles.experienceInfo)}>
                <span>Typescript</span>
                <span>React</span>
                <span>NextJS</span>
                <span>NodeJS</span>
                <span>Apollo</span>
                <span>GraphQL</span>
                <span>Mobx</span>
                <span>Redux</span>
                <span>CI/CD</span>
                <span>PNPM</span>
                <span>Deploy</span>
            </div>
            <h3 className={styles.headline}>
                <a href='https://yandex.ru/q'>Yandex.Q</a>
                <span className={styles.dates}>2019 — 2022</span>
            </h3>
            <p className={styles.jobtitle}>Senior Frontend Developer</p>
            <p>A user-generated content (UGC) question-and-answer service similar to Quora.</p>
            <ul className={styles.experienceInfo}>
                <li>Set up CI and deployment flow, simplifying the deployment process.</li>
                <li>Developed a service for generating OpenGraph images, improving development speed and complexity.
                </li>
                <li>Created a service for testing developed features, enhancing the stability of UI testing.</li>
                <li>Redesigned the main parts of the application UI</li>
                <li>Integrated video infrastructure</li>
                <li>Mentored teammates</li>
                <li>Managed technical tasks</li>
                <li>Automated everyday routines</li>
                <li>Worked closely with the design team</li>
                <li>Developed UI components</li>
                <li>Improved technical infrastructure</li>
                <li>Maintained CI processes</li>
                <li>Developed a beta testing application</li>
            </ul>

            <div className={clsJoin(styles.technologies, styles.experienceInfo)}>
                <span>Typescript</span>
                <span>React</span>
                <span>Mobx</span>
                <span>NodeJS</span>
                <span>Apollo</span>
                <span>Mobx</span>
                <span>CI/CD</span>
                <span>Deploy</span>
            </div>
            <h3 className={styles.headline}>
                <a href='https://yandex.ru/collections'>
                    Yandex.Collections
                </a>
                <span className={styles.dates}>2018 — 2019</span>
            </h3>
            <p className={styles.jobtitle}>Frontend Developer</p>
            <p>A UGC image service similar to Pinterest.</p>
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
            <p>
                Artworks collection application
            </p>
            <h4>Responsibilities</h4>
            <ul className={styles.experienceInfo}>
                <li>Communication with customer</li>
                <li>Architecture design</li>
                <li>Multirole browsing development</li>
                <li>Development of admin panel</li>
            </ul>
            <p>
                Biological Additives shop
            </p>
            <h4>Responsibilities</h4>
            <ul className={styles.experienceInfo}>
                <li>UI redesign</li>
                <li>Communication with customer</li>
                <li>Payment form development. Stripe integration</li>
            </ul>
            <h3 className={styles.headline}>Education</h3>
            <ul className={styles.experienceInfo}>
                <li>Bachelor degree. BSU Mechanics and Mathematics Faculty 2015-2019</li>
            </ul>
            <h3 className={styles.headline}>Technologies</h3>
            <div className={clsJoin(styles.technologies, styles.experienceInfo)}>
                <span>Typescript</span>
                <span>React</span>
                <span>NextJS</span>
                <span>NodeJS</span>
                <span>Apollo</span>
                <span>GraphQL</span>
                <span>Mobx</span>
                <span>Redux</span>
                <span>CI/CD</span>
                <span>Git</span>
                <span>PM2</span>
                <span>Webstorm</span>
                <span>ZSH</span>
                <span>Prettier</span>
                <span>Figma</span>
                <span>Linux</span>
            </div>
        </div>
    );
}

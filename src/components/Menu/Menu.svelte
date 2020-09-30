<script>
    import {stores} from '@sapper/app';
    import NoteIcon from 'components/Menu/icons/note.svg';
    import HomeIcon from 'components/Menu/icons/home.svg';
    import UserIcon from 'components/Menu/icons/user.svg';

    let {page} = stores();
    let path = $page.path;

    $: currentPath = $page.path;
    let isMenuHidden = $page.path === '/me/';

    let links = [
        {
            href: '/notes/',
            label: 'Заметки',
            icon: NoteIcon,
            classMod: 'notes',
        },
        {
            href: '/',
            label: 'Главная',
            icon: HomeIcon,
            classMod: 'home',
        },
        {
            href: '/about/',
            label: 'Обо мне',
            icon: UserIcon,
            classMod: 'about',
        },
    ];
</script>

<nav>
    <ul class="menu" class:menu_hidden="{isMenuHidden}">
        {#each links as link}
            <li class="menu-item">
                <a
                    class="link link_{link.classMod}"
                    class:link_active="{currentPath === link.href}"
                    href="{link.href}"
                >
                    {@html link.icon}
                    {link.label}
                </a>
            </li>
        {/each}
    </ul>

</nav>

<style>
    .menu {
        min-width: 320px;
        margin: auto;
        list-style: none;
        z-index: 100;
        right: 16px;
        top: 16px;
        position: fixed;
        display: flex;
        background: #fff;
        border-radius: 16px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 0;
        transform: translateY(0%);
        transition: transform 0.5s cubic-bezier(0.04, 0.69, 0.54, 1.13);

        &_hidden {
            transform: translateY(150%);
        }
    }

    @media screen and (max-width: 576px) {
        .menu {
            top: auto;
            bottom: 8px;
            left: 8px;
            right: 8px;
        }
    }

    .menu-item {
        flex-basis: 33.333%;
        flex-grow: 1;
        flex-shrink: 0;
    }

    .link {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 20px;
        font-size: 14px;
        text-align: center;
        color: #000;
        position: relative;

        :global(path) {
            stroke-dasharray: 70;
            stroke-dashoffset: 0;
        }

        &:hover {
            :global(path) {
                animation: dash 0.5s linear forwards;
            }
        }

        @keyframes dash {
            from {
                stroke-dashoffset: 70;
            }
            to {
                stroke-dashoffset: 0;
            }
        }

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: transparent;
            width: 60px;
            height: 60px;
            z-index: -1;

            clip-path: polygon(0 0, 50% 0, 100% 0, 100% 100%, 50% 100%, 0% 100%);
            transition: 0.2s ease;
        }

        &:hover {
            text-decoration: none;
            &::before {
                opacity: 0.6;
            }
        }
        &_active {
            &::before {
                opacity: 0.3;
            }
        }

        &:hover,
        &_active {
            &.link_notes {
                &::before {
                    clip-path: polygon(11% 36%, 40% 13%, 95% 23%, 90% 62%, 70% 93%, 15% 80%);
                    background: #5adfb7;
                }
            }

            &.link_home {
                &::before {
                    clip-path: polygon(8% 23%, 57% 11%, 98% 30%, 83% 90%, 35% 96%, 2% 65%);
                    background: #5aa3df;
                }
            }

            &.link_about {
                &::before {
                    clip-path: polygon(8% 23%, 57% 11%, 57% 11%, 95% 45%, 60% 99%, 2% 78%);
                    background: #cd5adf;
                }
            }
        }
    }
</style>

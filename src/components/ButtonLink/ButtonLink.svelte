<script>
    import {stores} from '@sapper/app';

    let {session} = stores();
    let ua = $session.ua;

    let isMobile = ua.device.type === 'mobile';

    export let href;
</script>

<a class="button-link" class:button-link_no-animation="{isMobile}" {href}>
    <slot />
</a>

<style type="text/postcss">
    .button-link {
        position: fixed;
        top: 24px;
        right: 16px;
        right: calc(16px + env(safe-area-inset-right));
        padding: 8px 24px;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        background: #fff;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
        opacity: 0.85;
        z-index: 2;
        overflow: hidden;
        transition: 0.1s ease-in-out;
        border-radius: 2px;

        &:hover {
            text-decoration: none;
        }

        &:not(&_no-animation):hover {
            opacity: 1;
            color: white;
        }

        &:before,
        &:after {
            top: 0;
            content: '';
            display: block;
            position: absolute;
            width: 50%;
            height: 0;
            z-index: -1;
            transition: 0.2s ease-in-out;
        }

        &:before {
            left: 0;
            border-bottom: 56px solid #4383d4;
            border-right: 56px solid transparent;
            transform: translateX(-100%);
        }

        &:after {
            right: 0;
            border-top: 56px solid #4383d4;
            border-left: 56px solid transparent;
            transform: translateX(100%);
        }

        &:not(&_no-animation):hover:after,
        &:not(&_no-animation):hover:before {
            transform: translateX(0);
        }

        @media screen and (max-width: 576px) {
            top: auto;
            bottom: 0;
            bottom: env(safe-area-inset-bottom);
            right: 0;
            left: 0;
            opacity: 1;
        }
    }
</style>

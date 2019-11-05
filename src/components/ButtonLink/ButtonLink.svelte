<script>
    import {stores} from '@sapper/app';

    let {session} = stores();
    let ua = $session.ua;

    let isMobile = ua.device.type === 'mobile';

    export let href;
</script>

<style>
    @import 'ButtonLink.css';
</style>

<a
    class="button-link"
    class:button-link_no-animation={isMobile}
    {href}
>
    <slot />
</a>

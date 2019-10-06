<script>
    import {stores} from '@sapper/app';
    import UAParser from 'ua-parser-js';

    const {session} = stores();
    const parser = new UAParser($session['user-agent']);

    const isMobile = parser.getResult().device.type === 'mobile';

    export let href;
</script>

<style>
    @import 'ButtonLink.css';
</style>

<a class="button-link {isMobile ? 'button-link_no-animation' : ''}" {href}>
    <slot />
</a>

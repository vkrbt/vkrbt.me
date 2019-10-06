<script>
    import Emoji from 'components/Emoji/Emoji.svelte';
    import {generateEmoji} from 'helpers/generateEmoji';
    import {throttle} from 'helpers/throttle';
    import {isDeviceOrientationSupported, isTouchSupported} from 'helpers/device';

    export let number;

    let {innerHeight, innerWidth} = window;

    let radius = Math.sqrt(innerHeight * innerWidth) / 10;

    let randomEmojis = generateEmoji(number, radius);

    let currentXMovement = 0;
    let currentYMovement = 0;
    let isOrientation = isDeviceOrientationSupported() && isTouchSupported();

    if (window.DeviceOrientationEvent && window.DeviceOrientationEvent.requestPermissions) {
        DeviceOrientationEvent.requestPermissions();
    }

    export function handleDeviceOrientation(event) {
        requestAnimationFrame(() => {
            const maxX = window.innerWidth;
            const maxY = window.innerHeight;

            let x = event.gamma;
            let y = event.beta;

            if (x > 90) {
                x = 90;
            }
            if (x < -90) {
                x = -90;
            }

            x += 90;
            y += 90;

            currentXMovement = (maxX * x) / maxX - 120;
            currentYMovement = (maxY * y) / maxY - 120;
        });
    }

    function handleMouseMove(event) {
        requestAnimationFrame(() => {
            currentXMovement += event.movementX;
            currentYMovement += event.movementY;
        });
    }

    let updateEmoji = throttle(() => {
        randomEmojis = generateEmoji(number, radius);
        currentXMovement = 0;
        currentYMovement = 0;
    }, 150);
</script>

<style>
    .emoji-container {
        overflow: hidden;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
</style>

<svelte:window
    on:resize|passive={updateEmoji}
    on:mousemove|passive={isOrientation ? null : handleMouseMove}
    on:deviceorientation|passive={isOrientation ? handleDeviceOrientation : null} />

<div class="emoji-container">
    {#each randomEmojis as emoji}
        <Emoji
            {...emoji}
            {isOrientation}
            movementX={currentXMovement}
            movementY={currentYMovement} />
    {/each}
</div>

<script>
    import {onMount, onDestroy} from 'svelte';
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
    let isOrientation = isDeviceOrientationSupported();

    if (window.DeviceOrientationEvent && window.DeviceOrientationEvent.requestPermissions) {
        DeviceOrientationEvent.requestPermissions();
    }

    let isEmojisShown = !isOrientation;

    let timeoutId;

    onMount(() => {
        timeoutId = setTimeout(() => {
            isEmojisShown = true;
        }, 200);
    });

    onDestroy(() => {
        clearTimeout(timeoutId);
    });

    export function handleDeviceOrientation(event) {
        requestAnimationFrame(() => {
            if (!isEmojisShown) {
                isEmojisShown = true;
                clearTimeout(timeoutId);
            }

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

<svelte:window
    on:resize|passive="{updateEmoji}"
    on:mousemove|passive="{isOrientation ? null : handleMouseMove}"
    on:deviceorientation|passive="{isOrientation ? handleDeviceOrientation : null}"
/>

{#if isEmojisShown}
    <div class="emoji-container">
        {#each randomEmojis as emoji}
            <Emoji
                {...emoji}
                {isOrientation}
                movementX="{currentXMovement}"
                movementY="{currentYMovement}"
            />
        {/each}
    </div>
{/if}

<style>
    @keyframes appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .emoji-container {
        overflow: hidden;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        animation: appear 0.2s ease-out;
    }
</style>

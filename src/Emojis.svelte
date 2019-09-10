<script>
	import Emoji from './Emoji.svelte';
	import {generateEmoji} from './generateEmoji';
	import {isDeviceOrientationSupported, isTouchSupported} from './device';

	export let number;

	let {innerHeight, innerWidth} = window;

	let radius = Math.sqrt(innerHeight * innerWidth) / 10;

	let randomEmojis = generateEmoji(number, radius);

	export let currentXMovement = 0;
	export let currentYMovement = 0;
	export let isOrientation = isDeviceOrientationSupported() && isTouchSupported();

	export function handleDeviceOrientation(event) {
		requestAnimationFrame(() => {
			let maxX = window.innerWidth;
            let maxY = window.innerHeight;

			let x = event.gamma;
			let y = event.beta;

			if (x >  90) { x =  90};
            if (x < -90) { x = -90};

            x += 90;
            y += 90;

			currentXMovement  = (maxX*x/maxX - 120);
            currentYMovement = (maxY*y/maxY - 120);
		});
	}

	export function handleMouseMove(event) {
		requestAnimationFrame(() => {
			currentXMovement += event.movementX;
			currentYMovement += event.movementY;
		});
	}
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
	on:mousemove|passive={isOrientation ? null : handleMouseMove}
	on:deviceorientation|passive={isOrientation ? handleDeviceOrientation : null}
/>

<div class="emoji-container">
	{#each randomEmojis as emoji}
		<Emoji {...emoji} {isOrientation} movementX={currentXMovement} movementY={currentYMovement}></Emoji>
	{/each}
</div>
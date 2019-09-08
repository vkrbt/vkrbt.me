<script>
	import {getRandom, getRandomBool} from './random';

	export let x;
	export let y;
	export let emoji;

	let randomSpeed = getRandom(.1, 0.5);

	export let currentX = x;
	export let currentY = y;

	let xDirection = getRandomBool();
	let yDirection = getRandomBool();

	export function handleMouseMove(event) {
		requestAnimationFrame(() => {
			if (xDirection) {
				currentX += event.movementX * randomSpeed;
			} else {
				currentX -= event.movementX * randomSpeed;
			}

			if (yDirection) {
				currentY += event.movementY * randomSpeed;
			} else {
				currentY -= event.movementY * randomSpeed;
			}
		});
	}
</script>

<style>
	.float-emoji {
		display: block;
		position: absolute;
		font-size: 32px;
		transform: translate(-50%, -50%);
		opacity: 0.5;
	}
</style>

<svelte:window on:mousemove={handleMouseMove} />

<span style="top: {currentX}px; left: {currentY}px" class="float-emoji">{@html emoji}</span>

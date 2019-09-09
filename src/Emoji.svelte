<script>
	import {getRandom, getRandomBool} from './random';

	export let x;
	export let y;
	export let emoji;

	let randomSpeed = getRandom(0.05, .15);

	export let currentX = 0;
	export let currentY = 0;

	let xDirection = getRandomBool();
	let yDirection = getRandomBool();

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

			currentX  = (maxX*x/maxX - 120);
            currentY = (maxY*y/maxY - 120);
		});
	}

	export function handleMouseMove(event) {
		requestAnimationFrame(() => {
			currentX -= event.movementX * randomSpeed;
			currentY -= event.movementY * randomSpeed;
		});
	}
</script>

<style>
	.float-emoji {
		display: block;
		position: absolute;
		font-size: 32px;
		opacity: 0.5;
	}
</style>

<svelte:window on:mousemove={handleMouseMove} on:deviceorientation={handleDeviceOrientation} />

<span
	style="top: {y}px; left: {x}px; transform: translate3d({currentX}px, {currentY}px, 0)"
	class="float-emoji"
>
	{@html emoji}
</span>

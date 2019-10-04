<script>
	import {getRandom, getRandomBool} from '../helpers/random';

	export let x;
	export let y;
	export let emoji;
	export let movementX;
	export let movementY;
	export let isOrientation;

	let randomSpeed = isOrientation ? getRandom(0.8, 1.2) : getRandom(0.01, .05);

	export let currentX;
	export let currentY;

	$: currentX = x + movementX * randomSpeed;
	$: currentY = y + movementY * randomSpeed;
</script>

<style>
	.float-emoji {
		display: block;
		position: absolute;
		font-size: 32px;
		opacity: 0.5;
		top: 0;
		left: 0;
	}
</style>

<span
	style="transform: translate({currentX}px, {currentY}px)"
	class="float-emoji"
>
	{@html emoji}
</span>

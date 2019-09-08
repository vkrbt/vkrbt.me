<script>
	import {getRandomInt} from './random';
	import {isInRadius} from './isInRadius';
	import Emoji from './Emoji.svelte';

	const FIRST_EMOJ_FACE = 0x1F601;
	const LAST_EMOJI_FACE = 0x1F64F;

	export let number;

	let {innerHeight, innerWidth} = window;
	const MIN_EMOJI_DISTANCE = 100;

	let randomEmojis = [];

	for (let i = 0; i < number; ++i) {
		let newEmoji;
		let emojiInRadius;
		let attempts = 0;

		console.log(attempts);

		while (!newEmoji || emojiInRadius) {
			attempts += 1;

			if (attempts > 5) {
				break;
			}

			newEmoji = {
				y: getRandomInt(-innerWidth / 2, innerWidth * 1.5),
				x: getRandomInt(-innerHeight / 2, innerHeight * 1.5),
				emoji: `&#${getRandomInt(FIRST_EMOJ_FACE, LAST_EMOJI_FACE)}`,
			};

			emojiInRadius = isInRadius(randomEmojis, newEmoji, MIN_EMOJI_DISTANCE);
		}

		randomEmojis.push(newEmoji);
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

<div class="emoji-container">
	{#each randomEmojis as emoji}
		<Emoji {...emoji}></Emoji>
	{/each}
</div>
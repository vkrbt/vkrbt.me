<script>
	import Emoji from './Emoji.svelte';
	import {generateEmoji} from './generateEmoji';

	export let number;

	let {innerHeight, innerWidth} = window;

	let randomEmojis = generateEmoji(number, 50);
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
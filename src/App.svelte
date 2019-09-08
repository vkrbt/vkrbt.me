<script>
	import Emojis from './Emojis.svelte';

	let birthday = Date.UTC(1998, 5, 8);
	let today = Date.now();
	let ageInSeconds = today - birthday;

	export let ageInYears = Math.floor(ageInSeconds / (60 * 60 * 24 * 365.25 * 1000));
</script>

<style>
	.content {
		background: rgba(255, 255, 255, 0.7);
		z-index: 1;
		display: inline-block;
		padding: 16px;
	}

	* {
		font-family: 'Arvo';
	}
</style>

<main class="content">
	<h1>Vladislav Korbut</h1>
	<h2>Frontend developer</h2>
	<p>
		My name is <strong>Vlad Korbut</strong>. I'm {ageInYears} years old. I live in Minsk, Belarus.
	</p>
	<p>You can contact me via <a href="https://t.me/vkrbt/">telegram</a> or <a href="mailto:vkrbt.me">email</a></p>
</main>
<Emojis number={80}></Emojis>

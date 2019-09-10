<script>
	import Emojis from './Emojis.svelte';
	import photo from './images/vkrbt.jpg';
	import photox2 from './images/vkrbt@2x.jpg';

	export let image = photo;

	let birthday = Date.UTC(1998, 5, 8);
	let today = Date.now();
	let ageInSeconds = today - birthday;

	export let ageInYears = Math.floor(ageInSeconds / (60 * 60 * 24 * 365.25 * 1000));
</script>

<style>
	.content {
		z-index: 1;
		display: inline-block;
		padding: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-family: 'Arvo';
	}

	@media screen and (max-width: 576px) {
		.content {
			flex-direction: column;
		}
	}

	.description {
		padding-left: 16px;
		background: rgba(255, 255, 255, 0.7);
	}

	.picture {
		width: 200px;
		height: 200px;
	}
</style>

<main class="content">
	<img class="picture" src={image} srcset="{photox2} 2x" alt="my portrait" />
	<div class="description">
		<h1>Vladislav Korbut</h1>
		<h2>Frontend developer</h2>
		<p>
			My name is <strong>Vlad Korbut</strong>. I'm {ageInYears} years old. I live in Minsk, Belarus.
		</p>
		<p>
			You can contact me via <a href="https://t.me/vkrbt/">telegram</a> or <a href="mailto:vkrbt.me">email</a>
		</p>
	</div>
</main>
<Emojis number={50}></Emojis>

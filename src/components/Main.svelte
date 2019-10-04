<script>
	import Emojis from './Emojis.svelte';

	let birthday = Date.UTC(1998, 5, 8);
	let today = Date.now();
	let ageInSeconds = today - birthday;

	export let ageInYears = Math.floor(ageInSeconds / (60 * 60 * 24 * 365.25 * 1000));
</script>

<style>
	.content {
		display: flex;
		padding: 16px;
		justify-content: center;
		align-items: center;
		height: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}

	.description {
		padding-left: 16px;
		background: rgba(255, 255, 255, 0.7);
	}

	@media screen and (max-width: 576px) {
		.description {
			text-align: center;
		}
		.content {
			flex-direction: column;
		}
	}

	.picture {
		width: 200px;
		height: 200px;
	}
</style>

<main class="content">
	<img class="picture" src='vkrbt.jpg' srcset="vkrbt@2x.jpg 2x" alt="мой портрет" />
	<div class="description">
		<h1>Я Влад Корбут</h1>
		<h2>Разработчик интерфейсов</h2>
		<p>
			Мне {ageInYears}, а живу я Минске.
		</p>
		<p>
			Для связи со мной можно использовать <a href="https://t.me/vkrbt/">телеграм</a> или <a href="mailto:vkrbt.me">email</a>
		</p>
	</div>
</main>
{#if process.browser}
	<Emojis number={50}></Emojis>
{/if}

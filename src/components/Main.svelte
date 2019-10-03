<script>
	import Emojis from './Emojis.svelte';
	import ButtonLink from './ButtonLink.svelte';

	let birthday = Date.UTC(1998, 5, 8);
	let today = Date.now();
	let ageInSeconds = today - birthday;

	export let ageInYears = Math.floor(ageInSeconds / (60 * 60 * 24 * 365.25 * 1000));
</script>

<style>
	.content {
		z-index: 1;
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

	@media screen and (max-width: 576px) {
		.content {
			flex-direction: column;
		}
	}

	.description {
		text-align: center;
		padding-left: 16px;
		background: rgba(255, 255, 255, 0.7);
	}

	.picture {
		width: 200px;
		height: 200px;
	}
</style>

<ButtonLink href="/notes">Мои заметки</ButtonLink>
<main class="content">
	<div class="description">
		<img class="picture" src='vkrbt.jpg' srcset="vkrbt@2x.jpg 2x" alt="мой портрет" />
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

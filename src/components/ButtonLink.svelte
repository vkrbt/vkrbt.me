<script>
	export let href;
</script>

<style>
    .button-link {
		position: fixed;
		top: 16px;
		right: 16px;
		padding: 8px 24px;
		font-size: 20px;
		line-height: 36px;
		text-align: center;
		background: #fff;
		box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.1);
		opacity: 0.7;
		transition: 0.2s ease-out;
		z-index: 2;
	}

	.button-link:hover {
		text-decoration: none;
		opacity: 1;
	}

	@media screen and (max-width: 576px) {
		.button-link {
			top: auto;
			bottom: 0;
			right: 0;
			left: 0;
			opacity: 1;
		}
	}
</style>

<a class="button-link" href={href}>
	<slot />
</a>

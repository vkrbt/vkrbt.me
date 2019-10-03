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
		line-height: 40px;
		text-align: center;
		background: #fff;
		box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.1);
		opacity: 0.7;
		transition: 0.2s ease-out;
		z-index: 2;
		overflow: hidden;
		transition: 0.1s ease-in-out;
		border-radius: 2px;
	}

	.button-link:hover {
		text-decoration: none;
		opacity: 1;
		color: white;;
	}

	.button-link:before,
	.button-link:after {
		top: 0;
		content: '';
		display: block;
		position: absolute;
		width: 50%;
		height: 0;
		z-index: -1;
		transition: 0.2s ease-in-out;
	}

	.button-link:before {
		left: 0;
		border-bottom: 56px solid #4383d4;
		border-right: 56px solid transparent;
		transform: translateX(-100%);
	}

	.button-link:after {
		right: 0;
		border-top: 56px solid #4383d4;
		border-left: 56px solid transparent;
		transform: translateX(100%);
	}

	.button-link:hover:after,
	.button-link:hover:before {
		transform: translateX(0);
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

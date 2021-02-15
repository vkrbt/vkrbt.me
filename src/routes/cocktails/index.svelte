<script>
    import cocktails from '../../../../bar/src/cocktails';
    import CocktailCard from 'components/CocktailCard/CocktailCard.svelte';
</script>

<div class="list">
    {#each cocktails.list as item}
        <CocktailCard cocktail={item} />
    {/each}
</div>

<style>
    .list {
        max-width: 1600px;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 720px) {
        .list {
            display: flex;
            flex-direction: column;
        }
    }

    @media screen and (max-width: 1200px) {
        .list {
            grid-template-columns: 1fr 1fr;
        }
    }

</style>

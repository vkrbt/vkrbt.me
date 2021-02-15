<script>
    import LowballIcon from 'components/CocktailCard/icons/lowball.svg';

    const ICONS = {
        'lowball glass': LowballIcon,
    }

    export let cocktail;
</script>

<div class="cocktail">
    <h3>
        {cocktail.en}
    </h3>
<!--    <div>-->
<!--        {@html ICONS[cocktail.dish]}-->
<!--    </div>-->
    <!--            <div>-->
    <!--                <i>{item.drinkTime}</i>-->
    <!--                <a href={item.ibaLink}>IBA Link</a>-->
    <!--                <a href={item.link}>probarman.ru</a>-->
    <!--            </div>-->
    <ul>
        {#each cocktail.ingredients as ingredient}
            <li>
                {ingredient.name}
                {#if ingredient.amount}
                            <span>
                                - {ingredient.amount}
                            </span>
                {/if}
            </li>
        {/each}
    </ul>
    <i>{cocktail.method}</i>
</div>

<style>
    .cocktail {
        color: #fff;
        display: flex;
        flex-direction: column;
        padding: 16px;
    }

    @media screen and (max-width: 576px) {
        .cocktail {
            padding: 0 16px;
            justify-content: center;
            min-height: 70vh;
        }
    }
</style>

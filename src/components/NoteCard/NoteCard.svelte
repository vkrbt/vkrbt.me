<script>
    import {formatDate} from 'helpers/formatDate';

    export let id;
    export let title;
    export let description;
    export let date;
</script>

<a href="/notes/{id}/">
    <div>
        <span class="date date-mobile">{formatDate(date)}</span>
        <h2>{title} <span class="date date-dt">— {formatDate(date)}</span></h2>
    </div>
</a>

<style>
    h2 {
        margin: 0;
    }

    .date {
        color: #c9c8cd;
        font-weight: 400;
        font-style: italic;
        font-size: 12px;
    }

    .date-mobile {
        display: none;
    }

    @media screen and (max-width: 576px) {
        .date-mobile {
            display: block;
        }

        .date-dt {
            display: none;
        }
    }
</style>

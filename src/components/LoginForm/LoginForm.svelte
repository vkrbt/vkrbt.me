<script>
    import {post} from 'helpers/request';

    async function login(email, password) {
        let res = await post('/users/login', {email, password});

        return res.json();
    }

    let email = '';
    let password = '';

    function preventSubmit(event) {
        event.preventDefault();
    }

    async function onSubmit() {
        let res = await login(email, password);

        if (res) {
            setToken(res.token);
        }
    }
</script>

<form on:submit="{preventSubmit}">
    <input type="text" bind:value="{email}" placeholder="email" />
    <input type="password" bind:value="{password}" placeholder="password" />
    <button on:click="{onSubmit}" type="submit">Submit</button>
</form>

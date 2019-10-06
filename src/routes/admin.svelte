<script context="module">
    async function login(email, password) {
        let res = await fetch('http://127.0.0.1:8000/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password}),
        });

        return res.json();
    }
</script>
<script>
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

<style>

</style>

<section>
    <form on:submit={preventSubmit}>
        <input type="text" bind:value={email} placeholder="email">
        <input type="password" bind:value={password} placeholder="password">
        <button on:click={onSubmit} type="submit">Submit</button>
    </form>
</section>

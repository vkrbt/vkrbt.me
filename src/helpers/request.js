import 'isomorphic-fetch';

const BASE_URL = 'https://vkrbt.me';

export async function get(url, options) {
    try {
        let response = await fetch(BASE_URL + url, options);

        return response.json();
    } catch (err) {
        console.log(err);

        throw err;
    }
}

export function post(url, options) {
    let {headers, body, ...params} = options;

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: JSON.stringify(body),
        ...params,
    });
}

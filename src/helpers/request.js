import 'isomorphic-fetch';

const BASE_URL = 'https://vkrbt.me';

export async function get(url, options) {
    try {
        let response = await fetch(BASE_URL + url, options);

        if (response.status === 200) {
            return response.json();
        }

        throw response;
    } catch (err) {
        console.log(err);

        throw err;
    }
}

export function post(url, data, options = {}) {
    let {headers, ...params} = options;

    return get(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: JSON.stringify(data),
        ...params,
    });
}

export function setItem(key, value) {
    if (window.localStorage) {
        window.localStorage.setItem(key, value);
    }
}

export function getItem(key) {
    if (window.localStorage) {
        window.localStorage.getItem(key);
    }
}

const TOKEN_KEY = 'vkrbt_token';

export function setToken(token) {
    return setItem(TOKEN_KEY, token);
}

export function getToken() {
    return getItem(TOKEN_KEY);
}

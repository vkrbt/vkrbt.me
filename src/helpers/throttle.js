export function throttle(callback, wait) {
    let timeout = null;

    return (...args) => {
        const next = () => {
            callback.apply(this, args);
            timeout = null;
        };

        if (!timeout) {
            timeout = setTimeout(next, wait);
        }
    };
}

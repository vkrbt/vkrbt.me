export function getRandom(from, to) {
    return Math.random() * (to - from + 1) + from;
}

export function getRandomInt(from, to) {
    return Math.floor(getRandom(from, to));
}

export function getRandomBool() {
    return getRandom(0, 1) < 0.5;
}
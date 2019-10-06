export function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

export function getRandomInt(min, max) {
    let minInt = Math.ceil(min);
    let maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

export function getRandomBool() {
    return getRandom(0, 1) < 0.5;
}

export function getRandomItem(list) {
    return list[getRandomInt(0, list.length - 1)];
}

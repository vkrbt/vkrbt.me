export function getPluralForm(count, words) {
    let countInt = Math.floor(count);

    let idx;
    if (countInt % 10 === 1 && countInt % 100 !== 11) {
        idx = 0;
    } else if (countInt % 10 >= 2 && countInt % 10 <= 4 && (countInt % 100 < 10 || countInt % 100 >= 20)) {
        idx = 1;
    } else {
        idx = 2;
    }

    return `${count} ${words[idx]}`;
}

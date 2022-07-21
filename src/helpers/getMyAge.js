import {SECONDS_IN_YEAR} from 'constants/default';

export function getMyAge() {
    let birthday = Date.UTC(1998, 5, 8);
    let today = Date.now();
    let ageInSeconds = today - birthday;

    return Math.floor(ageInSeconds / SECONDS_IN_YEAR);
}

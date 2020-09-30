export function decimalRound(value, decimalPlaces) {
    decimalPlaces = decimalPlaces || 0;

    let sign = (this < 0) ? -1 : 1;
    let exp = -decimalPlaces;

    // Shift
    value = Math.abs(value).toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));

    // Shift back
    value = value.toString().split('e');

    return (+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp))) * sign;
}

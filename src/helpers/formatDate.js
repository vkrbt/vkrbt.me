export function formatDate(dateString) {
    let date = new Date(dateString);

    return new Intl.DateTimeFormat('ru').format(date);
}

export function filterNullable<T>(arr: Nullable<T>[]) {
    return arr.filter<T>((item): item is T => Boolean(item) || item === 0);
}

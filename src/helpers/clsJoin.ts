import {filterNullable} from '@/helpers/filterNullable';

export function clsJoin(...classes: Nullable<string>[]): string {
    return filterNullable(classes).join(" ");
}

export function getElementsDistance(element1, element2) {
    let sideX = Math.abs(element1.x - element2.x);
    let sideY = Math.abs(element1.y - element2.y);

    return Math.sqrt(sideX * sideX + sideY * sideY);
}

export function isInElementRadius(element1, element2, radius) {
    return getElementsDistance(element1, element2) < radius;
}

export function isInRadius(elements, elementToCheck, radius) {
    return elements.some((element) => {
        return isInElementRadius(element, elementToCheck, radius);
    });
}

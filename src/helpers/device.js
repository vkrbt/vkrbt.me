export function isTouchSupported() {
    return (
        'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    );
}

export function isDeviceOrientationSupported() {
    return Boolean(window.DeviceOrientationEvent);
}

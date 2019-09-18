export function throttle(callback, wait) {
    let timeout = null;
  
    return function() {
      const next = () => {
        callback.apply(this, arguments);
        timeout = null;
      };
  
      if (!timeout) {
        timeout = setTimeout(next, wait);
      }
    };
}
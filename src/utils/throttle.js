export default function throttle(func, delay) {  
  let timeout = null;  
  return function(...args) {  
    if (!timeout) {  
      timeout = setTimeout(() => {  
        func.apply(this, args);  
        timeout = null;  
      }, delay);  
    }  
  };  
}
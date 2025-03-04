import 'core-js/stable';
import 'regenerator-runtime/runtime';

window.addEventListener('resize', () => {    
  console.log('resize event fired');
}
);

console.log('app.ts loaded');
import { $ } from './utils/dom.utils';  
import './utils/dom.utils';  

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is ready');

  const element = $('div');
  element?.on('click', () => console.log('Div clicked!'));  
});



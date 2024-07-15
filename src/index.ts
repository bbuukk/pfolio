import './utils/dom.utils';
import 'assets/styles/global.scss';

document.addEventListener('DOMContentLoaded', () => {

  const element = $('div');
  element?.on('click', () => console.log('Div clicked!'));  
});




import './scss/app.scss';
import Navigation from './components/Navigation';
import Banner from './components/Banner';

const app = () => {
  document.querySelector('nav.nav').innerHTML = Navigation();
  document.querySelector('.banner').innerHTML = Banner();
}

app();
import './scss/app.scss';
import Navigation from './components/Navigation';
import { MobileNavigationTemplate, toggleMobileNavigation } from './components/MobileNavigation';
import Banner from './components/Banner';
import TextImage from './components/TextImage';

const app = () => {
  document.querySelector('nav.nav').innerHTML = Navigation();
  document.querySelector('nav.nav__mobile').innerHTML = MobileNavigationTemplate();
  document.querySelector('.banner').innerHTML = Banner(document.querySelector('.banner'));
  document.querySelectorAll('.text-image').forEach(element => {
    element.innerHTML = TextImage(element);
  })
}

app();
toggleMobileNavigation();
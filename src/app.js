import './scss/app.scss';
import Navigation from './components/templates/Navigation';
import { MobileNavigationTemplate, toggleMobileNavigation } from './components/templates/MobileNavigation';
import Banner from './components/templates/Banner';

const app = () => {
  document.querySelector('nav.nav').innerHTML = Navigation();
  document.querySelector('nav.nav__mobile').innerHTML = MobileNavigationTemplate();
  document.querySelector('.banner').innerHTML = Banner(document.querySelector('.banner'));
}

app();
toggleMobileNavigation();
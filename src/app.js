import './scss/app.scss';
// import Navigation from './components/Navigation';
import { MobileNavigationTemplate, toggleMobileNavigation } from './components/MobileNavigation';
import Banner from './components/Banner';
import CarestoneVideo from './components/CarestoneVideo';
import TextImage from './components/TextImage';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import { CookieConsent, CookieConsentHandling } from './components/CookieConsent';

const app = () => {
  if (document.querySelector('.loading')) {
    document.querySelector('.loading').innerHTML = LoadingAnimation();
  }
  // document.querySelector('nav.nav').innerHTML = Navigation();
  // document.querySelector('nav.nav__mobile').innerHTML = MobileNavigationTemplate();
  if (document.querySelector('.banner')) {
    document.querySelector('.banner').innerHTML = Banner(document.querySelector('.banner'));
  }
  document.querySelectorAll('.text-image').forEach(element => {
    element.innerHTML = TextImage(element);
  })
  document.getElementById('cookie-consent').innerHTML = CookieConsent();

  if (document.getElementById('carestone-video')) {
    document.getElementById('carestone-video').innerHTML = CarestoneVideo();
  }
  // document.querySelector('footer').innerHTML = Footer();
}

app();
toggleMobileNavigation();
CookieConsentHandling();
import imageCurved from '../images/handshake-header-image-curved.jpg';
import image from '../images/handshake-header-image.jpg';

const Banner = (element) => {
  const template = `
    <div class="banner--hero">
      <img src="${image}" />
    </div>
    <div class="banner--text">
      <h1 class="h1">${element.getAttribute('data-first-headline')}</h1>
      <h2 class="h2">${element.getAttribute('data-second-headline')}</h2>
      <button class="button button--primary mt-4">Kontakt</button>
    </div>
    <div class="banner--image">
      <img src="${imageCurved}" />
    </div>
  `;

  return template;
}

export default Banner;
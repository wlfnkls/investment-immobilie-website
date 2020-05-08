import imageCurved from '../images/handshake-header-image-curved.jpg';
import image from '../images/handshake-header-image.jpg';

const Banner = (element) => {
  const template = `
    <div class="container">
      <h1 class="h1">${element.getAttribute('data-first-headline')}</h1>
      <!-- <div class="banner--hero">
        <img src="${image}" />
      </div> -->
      <h2 class="h2 mt-4">${element.getAttribute('data-second-headline')}</h2>
      <div class="button-row">
        <button class="button button--secondary mt-4">Kontakt</button>
      </div>
    </div>  
  `;

  return template;
}

export default Banner;

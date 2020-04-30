import imageCurved from '../images/handshake-header-image-curved.jpg';


const Banner = () => {
  const template = `
    <div class="banner--text">
      <h1 class="h1">Investment Immobilie</h1>
      <h2 class="h2">Partner für Finanzierung und Investment Immobilie</h2>
    </div>
    <div class="banner--image">
      <img src="${imageCurved}" />
    </div>
  `;

  return template;
}

export default Banner;
import imageCurved from '../images/handshake-header-image-curved.jpg';
import image from '../images/handshake-header-image.jpg';

const TextImage = (element) => {
  const headline = element.getAttribute('data-headline');
  const imageSrc = element.getAttribute('data-img-src');
  const template = `
    ${headline ? `<h2 class="h2">${headline}</h2>` : ``}
    <div class="text-image--content">
    <img class="text-image--image" src="${imageSrc}" alt="bild" />
      <div class="text-image--text">
        <div class="text-image--text__headline"><h3 class="h3">Headline</h3></div>
        <div class="text-image--text__text">
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <br />
          <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  `;

  return template;
}

export default TextImage;
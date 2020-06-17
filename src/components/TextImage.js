
const TextImage = (element) => {
  const images = require('../images/small/*.jpg');
  const headline = element.getAttribute('data-headline');
  const imageName = element.getAttribute('data-img-name');
  const text = element.getAttribute('data-text');
  const link = element.getAttribute('data-url');
  let imageSrc = '';

  if (images.hasOwnProperty(imageName)) {
    imageSrc = images[imageName];
  }

  const template = `
    <div class="text-image--content">
    <img class="text-image--image" src="${imageSrc}" alt="bild" />
      <div class="text-image--text">
        <div class="text-image--text__headline"><h3 class="h3">${headline}</h3></div>
        <div class="text-image--text__text mb-4">
          <p>${text}</p>
        </div>
        <div class="text-image--text__read-more">
          <a href="/${link}.html">Lesen Sie hier mehr!</a>
        </div>
      </div>
    </div>
  `;

  return template;
}

export default TextImage;

// image size: 713x475
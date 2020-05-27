const Banner = (element) => {
  const template = `
    <div class="container">
      <h2 class="h2 mt-4">${element.getAttribute('data-headline')}</h2>
      <p>
        - Rendite- Sicherheit - Transparenz
      </p>
      <div class="button-row">
        <button class="button button--secondary mt-4">Kontakt</button>
      </div>
    </div>  
  `;

  return template;
}

export default Banner;

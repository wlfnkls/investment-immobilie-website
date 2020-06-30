const Banner = (element) => {
  const template = `
    <div class="container">
      <h2 class="h2 mt-4">${element.getAttribute('data-headline')}</h2>
      <p class="mb-4">
        Rendite - Sicherheit- Transparenz 
      </p>
      <div class="button-row mt-4 mb-4">
        <a href="/contact.html" class="button button--secondary">Kontakt</a>
      </div>
    </div>  
  `;

  return template;
}

export default Banner;

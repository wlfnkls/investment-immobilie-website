const Banner = (element) => {
  const template = `
    <div class="container">
      <h2 class="h2 mt-4">${element.getAttribute('data-headline')}</h2>
      <p>
        Wer seine Altersvorsorge mal ganz anders gestalten möchte, fernab von den üblichen
        Durchführungswegen, der darf sich ebenfalls darauf freuen uns und unsere Ideen kennenzulernen.
      </p>
      <div class="button-row">
        <button class="button button--secondary mt-4">Kontakt</button>
      </div>
    </div>  
  `;

  return template;
}

export default Banner;

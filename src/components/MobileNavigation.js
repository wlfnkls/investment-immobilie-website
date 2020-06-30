import Logo from '../images/Logo.svg';

export const MobileNavigationTemplate = () => {
  const template = `
    <div class="logo">
      <a href="/index.html">
        <img src="${Logo}" alt="investment-immobilie-logo" />
      </a>
    </div>
    <div class="button button--open-mobile-nav">
      <div class="stripes">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <ul class="nav--elements">
      <li class="nav--element">Navigation</li>
      <li class="nav nav--element">
        <a href="/immobilienfinanzierung.html">Immobilien</a>
      </li>
      <li class="nav nav--element">
        <a href="/kapitalanlage.html">Kapital</a>
      </li>
      <li class="nav nav--element">
        <a href="/altersvorsorge.html">Altersvorsorge</a>
      </li>
      <li class="nav nav--element">
        <a href="/konsumentenkredit.html">Konsumentenkredit</a>
      </li>
      <li class="nav nav--element">
        <a href="/about.html">Über uns</a>
      </li>
    </ul>
  `;

  return template;
}

export const toggleMobileNavigation = () => {
  let button = document.querySelector('.button--open-mobile-nav');
  button.addEventListener('click', (ev) => {
    button.parentNode.classList.toggle('is-visible');
  });
}
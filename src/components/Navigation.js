import Logo from '../images/Logo.svg';

const Navigation = () => {

  const template = `
    <div class="logo">
      <a href="/index.html">
        <img src="${Logo}" alt="investment-immobilie-logo" />
      </a>
    </div>
    <ul class="nav nav--elements">
      <li class="nav nav--element">
        <a href="/immobilienfinanzierung.html">Finanzierung</a>
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

export default Navigation;
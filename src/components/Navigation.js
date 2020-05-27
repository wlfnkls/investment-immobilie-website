import Logo from '../images/Logo.svg';

const Navigation = () => {
  console.log(Logo);

  const template = `
    <div class="logo">
      <img src="${Logo}" alt="investment-immobilie-logo" />
      <!-- <h4 class="h4">Investment - Immobilie</h4> -->
    </div>
    <ul class="nav nav--elements">
      <li class="nav nav--element">Navigation #1</li>
      <li class="nav nav--element">Navigation #2</li>
      <li class="nav nav--element">Navigation #3</li>
      <li class="nav nav--element">Navigation #4</li>
    </ul>
  `;

  return template;
}

export default Navigation;
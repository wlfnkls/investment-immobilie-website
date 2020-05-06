export const MobileNavigationTemplate = () => {
  const template = `
    <ul class="nav--elements">
      <li class="nav--element">Navigation</li>
      <li class="nav--element"><a href="#">Navigation #1</a></li>
      <li class="nav--element"><a href="#">Navigation #2</a></li>
      <li class="nav--element"><a href="#">Navigation #3</a></li>
      <li class="nav--element"><a href="#">Navigation #4</a></li>
    </ul>
    <div class="button button--open-mobile-nav">
      <div class="stripes">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;

  return template;
}

export const toggleMobileNavigation = () => {
  let button = document.querySelector('.button--open-mobile-nav');
  button.addEventListener('click', (ev) => {
    button.parentNode.classList.toggle('is-visible');
  });
}
import Cookies from 'js-cookie';

export const CookieConsent = () => {
  const template = `
    <div class="container">
      <h2 class="h2">Diese Website verwendet Cookies 🍪</h2>
      <p class="mb-4">
        Wir nutzen Cookies, um ein besseres Internet-Erlebnis zu ermöglichen. Außerdem messen wir, woher unsere Besucher kommen, um unsere Website weiterzuentwickeln. 
      </p>
      <p class="mb-4">
        Weitere Informationen finden Sie in unseren <a href="./datenschutz.html">Datenschutzbestimmungen</a>.
      </p>
      <div class="button-row mt-4 mb-4">
        <button class="button button--primary" data-js-consent-cookies>Zustimmen</button>
        <button class="button button--secondary" data-js-decline-cookies>Ablehnen</button>
      </div>
    </div>  
  `;

  return template;
}

export const CookieConsentHandling = () => {
  const consentCookiesBtn = document.querySelector('[data-js-consent-cookies]');
  const declineCookiesBtn = document.querySelector('[data-js-decline-cookies]');

  checkCookie();

  consentCookiesBtn.addEventListener('click', (ev) => {
    setCookie(true);
    hideCookieHint();
    loadGAonConsent();
  });

  declineCookiesBtn.addEventListener('click', (ev) => {
    setCookie(false);
    hideCookieHint();
  });
}

const setCookie = function (consentCookie) {
  Cookies.set('consentCookies', consentCookie, { expires: 365 });
}

const checkCookie = function () {
 const consentCookies = Cookies.get('consentCookies');
  
  if (consentCookies === 'true' || consentCookies === 'false') {
    hideCookieHint();
  }

  if (consentCookies === 'true') {
    loadGAonConsent();
  }
}

const hideCookieHint = function () {
  document.getElementById('cookie-consent').classList.add('hidden');
}

const loadGAonConsent = function () {
  var gascript = document.createElement("script");
  gascript.async = true;
  gascript.src = "https://www.googletagmanager.com/gtag/js?id=UA-172031661-1";
  document.getElementsByTagName("head")[0].appendChild(gascript, document.getElementsByTagName("head")[0]);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'UA-172031661-1');
}

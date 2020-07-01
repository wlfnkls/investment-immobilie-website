const Footer = (element) => {
  const template = `
    <div class="footer container">
      <div class="elements">
        <div class="element">
        <ul class="footer--credits">
            <li><a href="/datenschutz.html">Datenschutz</a></li>
            <li><a href="/impressum.html">Impressum</a></li>
        </ul>
        <a href="http://www.freepik.com">Images by Freepik</a>
        <p>
          <span class="copyright">&copy; Copyright 2020</span>
        </p>
        </div>
        <div class="element">
          <p class="slogan mb-4">
            <span class="slogan--headline">INVESTMENT - IMMOBILIE</span>
            <span>Die Ideenschmiede der Finanzdienstleistung</span>
          </p>
          <ul class="footer--nav">
              <li><a href="/index.html">Home</a></li>
              <li><a href="/immobilienfinanzierung.html">Immobilien</a></li>
              <li><a href="/kapitalanlage.html">Kapital</a></li>
              <li><a href="/altersvorsorge.html">Altersvorsorge</a></li>
              <li><a href="/konsumentenkredit.html">Konsumkredit</a></li>
              <li><a href="/about.html">Über uns</a></li>
          </ul>
        </div>
      </div>
    </div>  
    `;

  return template;
}

export default Footer;

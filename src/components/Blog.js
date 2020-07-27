var md = require('markdown-it')();

class Blog {
  constructor(element) {
    this.storagePath = 'https://blog.investment-immobilie.net/storage/uploads';
    this.container = element;
    this.template = this.container.querySelector('#blog-element');
    this.title = this.template.querySelector('h2');

    this.init();
  }

  init() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://blog.investment-immobilie.net/api/collections/get/blog')
      .then(res => res.json())
      .then(res => {
        this.renderTemplate(res.entries);
      });
  }

  renderTemplate(entries) {
    entries.forEach(element => {
      const creationDate = new Date(element._created * 1000)
      const node = this.template.content.cloneNode(true);

      console.log(element._created);

      // node.querySelector('img').src = `${this.storagePath}${element.image.path}`;
      // node.querySelector('img').alt = `${element.image.title}`;
      node.querySelector('h2').innerText = element.title;
      node.querySelector('.blog-element--date').innerText = `${creationDate}`;
      node.querySelector('p').innerHTML = md.render(element.content);
      this.container.appendChild(node);
    });
  }
}

export default Blog;
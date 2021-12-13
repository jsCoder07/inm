const heroTemplate = document.createElement("template");
heroTemplate.innerHTML = `
<link rel="stylesheet" href="css/hero.css">
<section>
  <div class="hero"></div>
</section>
  `;
class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(heroTemplate.content.cloneNode(true));
  }

  connectedCallback() {}
}
window.customElements.define("hero-sec", Hero);

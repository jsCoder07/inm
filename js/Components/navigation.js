const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="css/nav.css" />
  <link rel="stylesheet" href="css/main.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <div class="nav">
  <div class="bg-orange-700 py-2 w-full">
  <div class="innerNav text-gray-100 py-1">
  <div><i class="fab fa-facebook-square"></i>
  <i class="fab fa-instagram-square"></i>
  <i class="fab fa-youtube-square"></i>
  <i class="fab fa-twitter-square"></i>
  <i class="fab fa-linkedin"></i>
  </div>
  <div>
  <a href="" class="hover:bg-orange-100 bg-slate-100 text-gray-800 p-2 px-4 shadow-lg shadow-orange-200/50 rounded-lg text-sm">Donate</a>
  </div>
  </div></div>
      <div class="innerNav">
        <img src="assets/logo.png" alt="" class="logo" />
        <div class="menu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <div class="navigation">
          <ul class="navlinks">
            <li><a href="" class="menulinks">Home</a></li>
            <li><a href="" class="menulinks">About Us</a></li>
      
            <li><a href="" class="menulinks">Donor Registration</a></li>
            <li><a href="" class="menulinks">Register a Child</a></li>
            <li><a href="" class="menulinks">Login</a></li>
            <li><a href="" class="menulinks">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
    
  `;
class Nav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const burger = this.shadowRoot.querySelector(".menu");
    const navContent = this.shadowRoot.querySelector(".navigation");
    const links = this.shadowRoot.querySelectorAll(".navlinks li");
    const slideNav = () => {
      burger.classList.toggle("toggle");
      navContent.classList.toggle("nav-active");
      links.forEach((link, index) => {
        link.classList.toggle("animated", "slideInDown");
        if (link.style.animation) {
          link.style.animation = ``;
        } else {
          link.style.animation = `navlinkfade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });
    };

    burger.addEventListener("click", slideNav);
    if (this.getAttribute("border") === "true") {
      this.shadowRoot.querySelector(".navigation").style.boxShadow =
        "6px 6px 16px 0 rgba(0, 0, 0, 0.5),-6px -6px 16px 0 rgba(255, 255, 255, 1)";
    }
  }
}

window.customElements.define("nav-bar", Nav);

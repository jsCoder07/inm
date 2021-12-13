const Kidstemplate = document.createElement("template");
Kidstemplate.innerHTML = `<link rel="stylesheet" href="css/main.css">
<style>
section{
   background:url('assets/bg8.jpg');
  background-size:     cover;                      
    background-repeat:   no-repeat;
    background-position: center center; 
}
</style>
<section class="grid place-items-center min-h-screen">
      <div class="p-4 max-w-5xl grid gap-4 xss:grid-cols-2 md:grid-cols-4">
      <h1
        class="
          text-4xl
          font-extrabold
          xss:w-1/2 xss:col-span-2 xss:grid xss:grid-cols-2
          md:col-span-3 md:text-5xl md:grid-cols-3
          xss:gap-4
        "
      >
        <span class=" md:col-span-4 xss:col-span-2 self-center"><h2 class="text-indigo-800 text-5xl font-semibold"  data-aos="fade-left">Read About the kids</h2></span>
      </h1>
      <p
        class="
          xss:row-start-2 xss:col-start-2 xss:self-center
          md:col-start-1 md:col-span-2
        "
      >
        We support kids from all over the world running the gamut from kids in Africa to kids in Asia, South and Central America and the middle East
      </p>
      <div class="h-16 bg-blue-500 xss:h-auto xss:aspect-square"></div>
      <div class="h-16 bg-blue-500 xss:h-auto xss:aspect-square"></div>
      <div class="h-16 bg-pink-500 xss:h-auto xss:aspect-square"></div>
      <div
        class="h-16 bg-blue-500 xss:h-auto xss:aspect-square md:col-start-2"
      ></div>
      <div class="h-16 bg-pink-500 xss:h-auto xss:aspect-square"></div>
      <div class="h-16 bg-blue-500 xss:h-auto xss:aspect-square"></div>
      <div class="h-16 bg-blue-500 xss:h-auto xss:aspect-square"></div>
      <div class="h-16 bg-pink-500 xss:h-auto xss:aspect-square"></div>
      <p class="self-center md:col-span-2">
        The kids are the future, showing them love, care, and affection today will help make tomorrows world a much better place.
      </p>
    </div>
    </section>
    
  `;
class Kids extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(Kidstemplate.content.cloneNode(true));
  }

  connectedCallback() {}
}

window.customElements.define("kids-sec", Kids);

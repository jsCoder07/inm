const Servicetemplate = document.createElement("template");
Servicetemplate.innerHTML = `<link rel="stylesheet" href="css/main.css">
<style>
.sec2{
  background:url('assets/joy2.jpg');
  background-size:     cover;                      
    background-repeat:   no-repeat;
    background-position: center center; 
}

section{
  background-image: linear-gradient(
    to bottom right,
   #efa2b4,
    #aef1ee
  );
  background:url('assets/bg2.jpg');
  background-size:     cover;                    
    background-repeat:   no-repeat;
    background-position: center center; 
}
 .inner{
   width:90%;
   min-height: 50vh;
   }
   @media screen and (max-width: 786px) {
  .inner {
    width: 95vw;
  }
}
   .inner{
     background:rgba(255,255,255,0.7);
      backdrop-filter:blur(5px);
      
   }
</style>
<section class="grid  min-h-screen md:grid-cols-2">
      <div class="sec  min-h-screen grid place-items-center">
     <div class="inner shadow-lg p-4 rounded-lg">
     <h2 class="text-orange-800 text-3xl font-semibold">Projects</h2>
     </div>
      </div>
      <div class="sec2 bg-green-500 min-h-screen"></div>
    </section>
  `;
class Service extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(Servicetemplate.content.cloneNode(true));
  }

  connectedCallback() {}
}

window.customElements.define("service-sec", Service);
